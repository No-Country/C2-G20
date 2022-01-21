import { Doughnut } from "react-chartjs-2"

export default function DoughnutChart() {
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

  const dataDoughnut = {
    labels: ["ARS", "MXN", "EUR"],
    datasets: [
      {
        label: "My First Dataset",
        data: [4414892, 864902, 37253],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 20,
      },
    ],
  }

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
