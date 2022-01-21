import { Line } from "react-chartjs-2";

export default function LineChart () {

  const options = {
    maintainAspectRatio: false,
    responsive: true,
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

  const dataLine = {
    labels: [],
    datasets: [{
      label: 'Value of Coin 1',
      data: [{x:'2016-12-19', y:20}, {x:'2016-12-20', y:10},
      {x:'2016-12-21', y:9}, {x:'2016-12-22', y:14},
      {x:'2016-12-23', y:18}, {x:'2016-12-24', y:7},
      {x:'2016-12-25', y:14}, {x:'2016-12-26', y:11},
      {x:'2016-12-27', y:12}, {x:'2016-12-28', y:21}],
      backgroundColor: [
        'rgba(255, 99, 132)'
      ],
      borderColor: [
        'rgba(255, 99, 132)'
      ],
      borderWidth: 1,
      hoverOffset: 20,
    },
    {
      label: 'Value of Coin 2',
      data: [{x:'2016-12-19', y:2}, {x:'2016-12-20', y:12},
      {x:'2016-12-21', y:19}, {x:'2016-12-22', y:4},
      {x:'2016-12-23', y:10}, {x:'2016-12-24', y:17},
      {x:'2016-12-25', y:20}, {x:'2016-12-26', y:19},
      {x:'2016-12-27', y:21}, {x:'2016-12-28', y:6}],
      backgroundColor: [
        'rgba(75, 192, 192)'
      ],
      borderColor: [
        'rgba(75, 192, 192)'
      ],
      borderWidth: 1,
      hoverOffset: 20
    }]
  }

  return <div className="container mx-5">
      {/* <h1>Line Chart</h1> */}
      <Line
      data={dataLine}
      options={options}
      />
  </div>
}
