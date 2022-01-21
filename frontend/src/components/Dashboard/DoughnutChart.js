import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart ({data}) {

  const options = {
    legend: {
      labels: {
        fontSize: 26
      }
    },
    plugins: {
      title: {
          display: true,
          text: 'Doughnut Chart'
      }
    }
  }


  return <div>
      <Doughnut
      data={data}
      options={options}/>
  </div>
}
