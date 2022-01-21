// import "./index.css"
import Dashboard from "../../components/Dashboard/Dashboard"
import BartChart from "../../components/Dashboard/BarChart"
import React, {useState, useEffect} from 'react';
import PieChart from '../../components/Dashboard/PieChart'
import LineChart from "../../components/Dashboard/LineChart";

export default function DashboardStatitics() {

 const [pieChart, setPieChart] = useState(false);
 const [dashboard, setDashboard] = useState(true);

  // useEffect(() => {
  //   <Dashboard />
  // },[])

  const pieChartEnabled = () => {
    setPieChart(true)
    setDashboard(false)
  }

  const pieChartDisabled = () => {
    setPieChart(false)
    setDashboard(true)
  }


  return (
    <section className="dashboard border shadow-lg my-4 " style={{ "padding-left": "1em" }}>
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
        ) : null}
      {/* <LineChart /> */}
       </div>

       <div className="col-md-3 col-sm-12 mb-4">
         <div className="my-3">
       <button className="btn btn-outline-success">Exportar a Excel</button>
         </div>
         <hr />
         <div className="my-3">
       <button className="btn btn-outline-primary">Grafico Linear</button>
         </div>
         <hr />
         {
          !pieChart ? 
           <button className="btn btn-outline-primary" onClick={pieChartEnabled}>Grafico Circular</button>
          :
          <button className="btn btn-outline-danger" onClick={pieChartDisabled}>Grafico Circular</button>
         }
        {/* {pieChart ? (
          <PieChart setPieChart={setPieChart} />
        ) : null} */}
       </div>
          
      </div>
      <h4 className="lead display-6">BTC Hoy</h4>
      <hr className="text-primary"/>

      <div className="container mb-4 mx-5 text-center">
          <p className="lead mx-4">ARS: <i class="fas fa-dollar-sign text-primary"></i> 4,414,892</p>
          <p className="lead mx-4">MXN:  <i class="fas fa-dollar-sign text-primary"></i> 864,902</p>
          <p className="lead mx-4">EUR:  <i class="fas fa-dollar-sign text-primary"></i> 37,253</p>
         
      </div>
      <div>
        
      </div>
    </section>
  )
}

