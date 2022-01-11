const excelJS = require("exceljs");



////////////////////////////////////////////////////////////////////////////////////////////
// Exports Excel
exports.downloadExcel = async (req, res) => {
  const userId = res.locals.user.id;
  const projects = await Projects.findAll({ where: { userId } }); // rTODO: replace projects with your model

  const workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet("Projects");

  worksheet.columns = [
    { header: "Name", key: "name", width: 15 },
    { header: "Url", key: "tasks", width: 15 },
    { header: "Status", key: "status", width: 15 },
  ];

  projects.forEach((project) => {
    worksheet.addRow({
      name: project.name,
      url: project.url,
    });
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=Projects.xlsx");
  await workbook.xlsx.write(res);
};
