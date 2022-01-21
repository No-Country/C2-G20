import "./index.css"
import CardStatitics from "../../components/CardStatitics"
import ElipseStatitics from "../../components/ElipseStatitics"
import imageStatiticsMonth from "../../images/estadisticas-mes.png"
import imageStatiticsWeekly from "../../images/estadisticas-semana.png"
import Dashboard from "../../components/Dashboard/Dashboard"
import BartChart from "../../components/Dashboard/BarChart"

export default function DashboardStatitics() {
  return (
    <section className="dashboard-statitics">
      <CardStatitics title="ventas de último mes" image={imageStatiticsMonth} />
      <CardStatitics
        title="ventas de última semana"
        image={imageStatiticsWeekly}
      />
      <div className="">
        <ElipseStatitics number="25" color="" description="Ventas" />
        <ElipseStatitics number="2" color="" description="Clientes Nuevos" />
        <ElipseStatitics number="12" color="" description="Nuevas Compras" />
        <ElipseStatitics number="25" color="" description="Productos Nuevos" />
      </div>
    </section>
  )
}
