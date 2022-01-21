import BartChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import PolarChart from './PolarChart';
import './Dashboard.css'
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
  SubTitle
} from 'chart.js';

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
);



export default function Dashboard() {


  return (
    <div className='chart-container'>
      <BartChart data={dataBar}/>
      <BartChart data={dataBar2}/>
      
      {/* <DoughnutChart data={dataDoughnut} /> */}
      
      {/* <PolarChart data={dataPolar} />  */}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    DATOS                                   */
/* -------------------------------------------------------------------------- */

const dataBar = {
  labels: [],
  datasets: [{
    label: 'Valor de la Crypto',
    data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}],
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
    parsing: {
      xAxisKey: 'id',
      yAxisKey: 'nested.value'
    },
    borderWidth: 1,
  }]
}
const datos = [{x: 'Enero', net: 100, cogs: 50, gm: 50}, {x: 'Febrero', net: 300, cogs: 55, gm: 75}];
const dataBar2 = {
  labels: ['Enero', 'Febrero'],
  datasets: [{
      label: 'Net sales',
      data: datos,
      parsing: {
          yAxisKey: 'net'
      },
      backgroundColor: [
        'rgb(255, 99, 132)',
      ],
  }, {
      label: 'Cost of goods sold',
      data: datos,
      parsing: {
          yAxisKey: 'cogs'
      },
      backgroundColor: [
        'rgb(54, 162, 235)',
      ],
  }]
}
const dataDoughnut = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 20
  }]
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

const dataPolar = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [7, 9, 11, 8, 11, 5],
    backgroundColor: [
      'rgba(255, 99, 132)',
      'rgba(54, 162, 235)',
      'rgba(255, 206, 86)',
      'rgba(75, 192, 192)',
      'rgba(153, 102, 255)',
      'rgba(255, 159, 64)'
    ],
    borderWidth: 1,
    hoverOffset: 20
  }]
}