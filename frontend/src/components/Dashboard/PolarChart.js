import { PolarArea } from 'react-chartjs-2'

export default function PolarChart ({data}) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Polar Chart'
      }
    }
  }
  return <div>
    <PolarArea 
    data={data}
    options={options} />
  </div>
}