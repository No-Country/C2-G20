// import "./index.css"
import CardStatitics from "../../components/CardStatitics"
import ElipseStatitics from "../../components/ElipseStatitics"
import imageStatiticsMonth from "../../images/estadisticas-mes.png"
import imageStatiticsWeekly from "../../images/estadisticas-semana.png"
import Dashboard from "../../components/Dashboard/Dashboard"
import BartChart from "../../components/Dashboard/BarChart"



export default function DashboardStatitics() {



  return (
    <section className="dashboard border  shadow-lg my-4" style={{ "padding-left": "1em" }}>
      <h4 className="lead display-6">BTC Ultimo mes</h4>
      <hr className="text-primary mb-4"/>
      <Dashboard />
      <h4 className="lead display-6">BTC Hoy</h4>
      <hr className="text-primary"/>

      <div className="d-flex justify-content-between">
        <ElipseStatitics number="1" color="" description="BTC" />
        <ElipseStatitics number="4,426,479" color="" description="$ ARS" />
        <ElipseStatitics number="866,199" color="" description="$ MEX" />
        <ElipseStatitics number="34,826,256" color="" description="$ CLP" />
      </div>
    </section>
  )
}

v