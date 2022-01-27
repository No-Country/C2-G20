import BartChart from "./BarChart"
import DoughnutChart from "./DoughnutChart"
import LineChart from "./LineChart"
import PieChart from "./PieChart"
import PolarChart from "./PolarChart"
import "./Dashboard.css"
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js"
import useValues from "../../hooks/useValues"
import { useCallback, useEffect, useState } from "react"

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
)

export default function Dashboard() {
  const { valuesToday, valuesOtherDay } = useValues()

  /* -------------------------------------------------------------------------- */
  /*                                    DATOS                                   */
  /* -------------------------------------------------------------------------- */
  console.log(valuesToday)
  const [dataBar, setDataBar] = useState(() => ({
    labels: [],
    datasets: [
      {
        label: `Valor de `,
        data: [
          { id: 1, nested: { value: 0 } },
          {
            id: 2,
            nested: { value: 0 },
          },
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
        parsing: {
          xAxisKey: "id",
          yAxisKey: "nested.value",
        },
        borderWidth: 1,
      },
    ],
  }))
  const [datos, setDatos] = useState(() => [
    { x: "usd", net: 100, cogs: 50, gm: 50 },
    { x: "mxn", net: 300, cogs: 55, gm: 75 },
  ])
  const [dataBar2, setDataBar2] = useState(() => ({
    labels: ["value", "eur"],
    datasets: [
      {
        label: "Net sales",
        data: datos,
        parsing: {
          yAxisKey: "net",
        },
        backgroundColor: ["rgb(255, 99, 132)"],
      },
      {
        label: "Cost of goods sold",
        data: datos,
        parsing: {
          yAxisKey: "cogs",
        },
        backgroundColor: ["rgb(54, 162, 235)"],
      },
    ],
  }))
  const [dataLine, setDataLine] = useState(() => ({
    labels: [],
    datasets: [
      {
        label: "Value of Coin 1",
        data: [
          { x: "2016-12-19", y: 20 },
          { x: "2016-12-20", y: 10 },
        ],
        backgroundColor: ["rgba(255, 99, 132)"],
        borderColor: ["rgba(255, 99, 132)"],
        borderWidth: 1,
        hoverOffset: 20,
      },
      {
        label: "Value of Coin 2",
        data: [
          { x: "2016-12-19", y: 2 },
          { x: "2016-12-20", y: 12 },
        ],
        backgroundColor: ["rgba(75, 192, 192)"],
        borderColor: ["rgba(75, 192, 192)"],
        borderWidth: 1,
        hoverOffset: 20,
      },
      {
        label: "Value of Coin 3",
        data: [
          { x: "2016-12-19", y: 20 },
          { x: "2016-12-20", y: 10 },
        ],
        backgroundColor: ["rgba(255, 99, 132)"],
        borderColor: ["rgba(255, 99, 132)"],
        borderWidth: 1,
        hoverOffset: 20,
      },
    ],
  }))
  const [dataPolar, setDataPolar] = useState(() => ({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [7, 9, 11, 8, 11, 5],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderWidth: 1,
        hoverOffset: 20,
      },
    ],
  }))

  useEffect(() => {
    if (!valuesOtherDay || !valuesToday) return
    setDataBar({
      labels: [],
      datasets: [
        {
          label: `Valor de ${valuesToday.symbol_crypto}`,
          data: [
            { id: valuesToday.date, nested: { value: valuesToday.value } },
            {
              id: valuesOtherDay.date,
              nested: { value: valuesOtherDay.value },
            },
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
          parsing: {
            xAxisKey: "id",
            yAxisKey: "nested.value",
          },
          borderWidth: 1,
        },
      ],
    })

    setDatos([
      {
        x: "usd",
        net: valuesToday.value_max,
        cogs: valuesToday.value_min,
        gm: 50,
      },
      {
        x: "mxn",
        net: valuesToday.value_max,
        cogs: valuesToday.value_min,
        gm: 75,
      },
    ])

    setDataBar2({
      labels: ["value", "eur"],
      datasets: [
        {
          label: "Net sales",
          data: datos,
          parsing: {
            yAxisKey: "net",
          },
          backgroundColor: ["rgb(255, 99, 132)"],
        },
        {
          label: "Cost of goods sold",
          data: datos,
          parsing: {
            yAxisKey: "cogs",
          },
          backgroundColor: ["rgb(54, 162, 235)"],
        },
      ],
    })

    setDataLine({
      labels: [],
      datasets: [
        {
          label: `Valor de USD`,
          data: [
            { x: valuesToday.date, y: valuesToday.usd },
            { x: valuesOtherDay, y: valuesOtherDay.usd },
          ],
          backgroundColor: ["rgba(255, 99, 132)"],
          borderColor: ["rgba(255, 99, 132)"],
          borderWidth: 1,
          hoverOffset: 20,
        },
        {
          label: "Valor de MXN",
          data: [
            { x: valuesToday.date, y: valuesToday.mxn },
            { x: valuesOtherDay.date, y: valuesOtherDay.mxn },
          ],
          backgroundColor: ["rgba(75, 192, 192)"],
          borderColor: ["rgba(75, 192, 192)"],
          borderWidth: 1,
          hoverOffset: 20,
        },
        {
          label: "Valor de EUR",
          data: [
            { x: valuesToday.date, y: valuesToday.eur },
            { x: valuesOtherDay.date, y: valuesOtherDay.eur },
          ],
          backgroundColor: ["rgba(255, 99, 132)"],
          borderColor: ["rgba(255, 99, 132)"],
          borderWidth: 1,
          hoverOffset: 20,
        },
      ],
    })

    setDataPolar({
      labels: ["USD", "EUR", "MXN"],
      datasets: [
        {
          label: "# of Votes",
          data: [valuesToday.usd, valuesToday.eur, valuesToday.mxn],
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
          ],
          borderWidth: 1,
          hoverOffset: 20,
        },
      ],
    })
  }, [valuesToday, valuesOtherDay])

  return (
    <div className="chart-container">
      <BartChart data={dataBar} />
      <BartChart data={dataBar2} />

      {/* <PolarChart data={dataPolar} />  */}
    </div>
  )
}
