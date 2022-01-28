import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import useValues from "../../hooks/useValues"

export default function LineChart() {
  const { valuesToday, valuesOtherDay } = useValues()
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "easeOutElastic",
        from: 1,
        to: 0,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  }

  const [dataLine, setDataLine] = useState(() => ({
    labels: [],
    datasets: [
      {
        label: "USD",
        data: [
          { x: "-", y: 0 },
          { x: "-", y: 0 },
        ],
        backgroundColor: ["rgba(255, 99, 132)"],
        borderColor: ["rgba(255, 99, 132)"],
        borderWidth: 1,
        hoverOffset: 20,
      },
      {
        label: "MXN",
        data: [
          { x: "-", y: 0 },
          { x: "-", y: 0 },
        ],
        backgroundColor: ["rgba(75, 192, 192)"],
        borderColor: ["rgba(75, 192, 192)"],
        borderWidth: 1,
        hoverOffset: 20,
      },
      {
        label: "EUR",
        data: [
          { x: "-", y: 0 },
          { x: "-", y: 0 },
        ],
        backgroundColor: ["rgba(255, 205, 86)"],
        borderColor: ["rgba(255, 205, 86)"],
        borderWidth: 1,
        hoverOffset: 20,
      },
    ],
  }))

  useEffect(() => {
    if (!valuesToday || !valuesOtherDay) return
    setDataLine({
      labels: [],
      datasets: [
        {
          label: "USD",
          data: [
            { x: "hoy", y: valuesToday.usd },
            { x: valuesOtherDay.date, y: valuesOtherDay.usd },
          ],
          backgroundColor: ["rgba(255, 99, 132)"],
          borderColor: ["rgba(255, 99, 132)"],
          borderWidth: 1,
          hoverOffset: 20,
        },
        {
          label: "MXN",
          data: [
            { x: "hoy", y: valuesToday.mxn },
            { x: valuesOtherDay.date, y: valuesOtherDay.mxn },
          ],
          backgroundColor: ["rgba(75, 192, 192)"],
          borderColor: ["rgba(75, 192, 192)"],
          borderWidth: 1,
          hoverOffset: 20,
        },
        {
          label: "EUR",
          data: [
            { x: "hoy", y: valuesToday.eur },
            { x: valuesOtherDay.date, y: valuesOtherDay.eur },
          ],
          backgroundColor: ["rgba(255, 205, 86)"],
          borderColor: ["rgba(255, 205, 86)"],
          borderWidth: 1,
          hoverOffset: 20,
        },
      ],
    })
  }, [valuesToday, valuesOtherDay])

  return (
    <div className="container mx-5">
      {/* <h1>Line Chart</h1> */}
      <Line data={dataLine} options={options} width={500} height={300} />
    </div>
  )
}
