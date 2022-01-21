import { Bar } from 'react-chartjs-2'

const BartChart = ({data}) => {

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

    plugins: {
      title: {
        display: true,
        text: 'Bar Chart'
      }
  }
  }
  return <div>
    <Bar 
      data={data}
      options={options}/>
  </div>
}

export default BartChart;