import { Pie } from "react-chartjs-2";

export default function PieChart ({data}) {

  const options = {
    maintainAspectRatio: true,
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

  return <div>
      {/* <h1>Pie Chart</h1> */}
      <Pie
      data={data}
      options={options}/>
  </div>
}
