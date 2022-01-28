import { useEffect, useState } from "react"
import { Doughnut } from "react-chartjs-2"
import useValues from "../../hooks/useValues"

export default function DoughnutChart() {
  const { valuesToday } = useValues()

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
        text: "Doughnut Chart",
      },
    },
  }

  const [dataDoughnut, setDataDoughnut] = useState(() => ({
    labels: ["USD", "MXN", "EUR"],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 0, 0],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 20,
      },
    ],
  }))

  useEffect(() => {
    if (!valuesToday) return

    setDataDoughnut({
      labels: ["USD", "MXN", "EUR"],
      datasets: [
        {
          label: "My First Dataset",
          data: [valuesToday.usd, valuesToday.mxn, valuesToday.eur],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 20,
        },
      ],
    })
  }, [valuesToday])
  return (
    <div>
      <Doughnut
        data={dataDoughnut}
        options={options}
        width={500}
        height={400}
      />
    </div>
  )
}
