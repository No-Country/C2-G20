// import "./index.css"
import Dashboard from "../../components/Dashboard/Dashboard"
import BartChart from "../../components/Dashboard/BarChart"
import React, {useState, useEffect} from 'react';
import PieChart from '../../components/Dashboard/PieChart'
import LineChart from "../../components/Dashboard/LineChart";
import '../DashboardStatitics/dashboardstatitics.css';
import DoughnutChart from "../../components/Dashboard/DoughnutChart";
export default function DashboardStatitics() {

 const [pieChart, setPieChart] = useState(false);
 const [dashboard, setDashboard] = useState(true);
const [lineChart, setLineChart] = useState(false);
  // useEffect(() => {
  //   <Dashboard />
  // },[])

  const lineChartEnabled = () => {
    setLineChart(true)
    setDashboard(false)
  }

  const lineChartDisabled = () => {
    setLineChart(false)
    setDashboard(true)
  }

  const pieChartEnabled = () => {
    setPieChart(true)
    setDashboard(false)
  }

  const pieChartDisabled = () => {
    setPieChart(false)
    setDashboard(true)
  }


  return (
    <section className="dashboard border shadow-lg my-4" style={{ "padding-left": "1em" }}>
      <h4 className="lead display-6">BTC Ultimo mes</h4>
      <hr className="text-primary mb-4"/>
      <div className="row">
        <div className="col-md-9 col-sm-12">
        {
            dashboard ? (
              <Dashboard /> 

            ) : null
          }
           {pieChart ? (
             
          <PieChart setPieChart={setPieChart} width={300} height={300} />
        ) : null
        }

        {
          lineChart ? (
            <LineChart  width={500} height={300} />
          ) : null

        }

       </div>

       <div className="col-md-3 col-sm-12 mb-4">

         <div className="my-3">
           {
             !lineChart ? 
             <button className="btn btn-outline-primary" onClick={lineChartEnabled}><i class="fas fa-chart-line"></i></button>
             :
             <button className="btn btn-danger" onClick={lineChartDisabled}><i class="fas fa-chart-line"></i></button>
           }
     
         </div>
         <hr />
         {
          !pieChart ? 
           <button className="btn btn-outline-primary" onClick={pieChartEnabled}><i class="fas fa-chart-pie"></i></button>
          :
          <button className="btn btn-danger" onClick={pieChartDisabled}><i class="fas fa-chart-pie"></i></button>
         }
         <hr />
          <div className="my-3">
       <button className="btn btn-outline-success" ><i class="fas fa-file-excel"></i></button> 
       <p className="form-text lead">Exportar a excel</p>
         </div>
         
       </div>
          
      </div>
      <h4 className="lead display-6">BTC Hoy</h4>
      <hr className="text-primary"/>

      <div className="container mb-4 mx-5 row">
        <div className="col-md-9">
        <DoughnutChart />
        </div>

      <div className="col-md-3">
      <p className="lead mx-4">ARS: <i class="fas fa-dollar-sign text-primary"></i> 4,414,892</p>
          <p className="lead mx-4">MXN:  <i class="fas fa-dollar-sign text-primary"></i> 864,902</p>
          <p className="lead mx-4">EUR:  <i class="fas fa-dollar-sign text-primary"></i> 37,253</p>
      </div>
      </div>
    </section>
  )
}

