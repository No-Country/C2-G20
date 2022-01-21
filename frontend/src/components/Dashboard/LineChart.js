import { Line } from "react-chartjs-2";

export default function LineChart ({data}) {

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeOutElastic',
        from: 1,
        to: 0,
      }
    },
    plugins: {
      title: {
          display: true,
          text: 'Line Chart'
      }
  }
  }
  return <div>
      {/* <h1>Line Chart</h1> */}
      <Line
      data={data}
      options={options}/>
  </div>
}
