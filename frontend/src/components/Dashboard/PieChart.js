import { useEffect, useState } from "react"
import { Pie } from "react-chartjs-2"
import useValues from "../../hooks/useValues"

export default function PieChart() {
  const { valuesToday, valuesOtherDay } = useValues()

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        fontSize: 26,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Pie Chart",
      },
    },
  }

  const [dataPie, setDataPie] = useState(() => ({
    labels: ["USD Today", "MXN Today", "EUR Today", "USD -", "MXN -", "EUR -"],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 20,
      },
    ],
  }))

  useEffect(() => {
    if (!valuesToday || !valuesOtherDay) return

    setDataPie({
      labels: [
        "USD Today",
        "MXN Today",
        "EUR Today",
        `USD ${valuesOtherDay.date}`,
        `MXN ${valuesOtherDay.date}`,
        `EUR ${valuesOtherDay.date}`,
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            valuesToday.usd,
            valuesToday.mxn,
            valuesToday.eur,
            valuesOtherDay.usd,
            valuesOtherDay.mxn,
            valuesOtherDay.eur,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          hoverOffset: 20,
        },
      ],
    })
  }, [valuesToday, valuesOtherDay])

  return (
    <div>
      <Pie data={dataPie} options={options} width={500} height={500} />
    </div>
  )
}
