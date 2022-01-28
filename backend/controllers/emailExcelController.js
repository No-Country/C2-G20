const { sendEmail } = require("../handlers/email");
const excelFornode = require("excel4node");

module.exports = async (req, res) => {
  try {
    const { payload } = req.body;
    const dayOne = payload[0];
    const dayTwo = payload[1];
    const workBook = new excelFornode.Workbook();
    const workSheet = workBook.addWorksheet("Crypto Values");

    workSheet.cell(1, 1).string("Symbol Crypto");
    workSheet.cell(1, 2).string("Value");
    workSheet.cell(1, 3).string("Value Max");
    workSheet.cell(1, 4).string("Value Min");
    workSheet.cell(1, 5).string("USD");
    workSheet.cell(1, 6).string("EUR");
    workSheet.cell(1, 7).string("MXN");
    workSheet.cell(1, 8).string("Date");

    workSheet.cell(2, 1).string(dayOne.symbol_crypto);
    workSheet.cell(2, 2).number(dayOne.value);
    workSheet.cell(2, 3).number(dayOne.value_max);
    workSheet.cell(2, 4).number(dayOne.value_min);
    workSheet.cell(2, 5).number(dayOne.usd);
    workSheet.cell(2, 6).number(dayOne.eur);
    workSheet.cell(2, 7).number(dayOne.mxn);
    workSheet.cell(2, 8).string(`${dayOne.date}`);

    workSheet.cell(3, 1).string(dayTwo.symbol_crypto);
    workSheet.cell(3, 2).number(dayTwo.value);
    workSheet.cell(3, 3).number(dayTwo.value_max);
    workSheet.cell(3, 4).number(dayTwo.value_min);
    workSheet.cell(3, 5).number(dayTwo.usd);
    workSheet.cell(3, 6).number(dayTwo.eur);
    workSheet.cell(3, 7).number(dayTwo.mxn);
    workSheet.cell(3, 8).string(`${dayTwo.date}`);

    workBook.write(`${dayOne.symbol_crypto}values.xlsx`, async (err, stats) => {
      if (err) {
        console.error(err);
        res.send(404);
      }
      res.download(`${dayOne.symbol_crypto}values.xlsx`);
    });

    const excelBuff = await workBook.writeToBuffer();
    const options = {
      user: {
        email: "hectortrejoluna23@gmail.com",
      },
      subject: `${dayOne.symbol_crypto} values by ${dayOne.date}`,
      attachments: [
        {
          filename: `${dayOne.symbol_crypto} values by ${dayOne.date}.xlsx`,
          content: excelBuff,
        },
      ],
      text: "Te mandamos el archivo excel a tu email para que lo lleves a donde quieras.",
    };
    await sendEmail(options);
    res.end();
  } catch (err) {
    console.error(err);
  }
};
