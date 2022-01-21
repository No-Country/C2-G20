import { Pie } from "react-chartjs-2";

export default function PieChart () {

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        fontSize: 26
      }
    },
    plugins: {
      title: {
          display: true,
          text: 'Pie Chart'
      }
  }
  }

  const dataPie = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      hoverOffset: 20
    }]
  }

  return <div>

      <Pie
      data={dataPie}
      options={options}
      width={500}
      height={500}
      
      />
     
      
  </div>
}
