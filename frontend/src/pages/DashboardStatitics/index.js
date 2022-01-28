import Dashboard from "../../components/Dashboard/Dashboard"
import React, { useState, useEffect, useCallback } from "react"
import PieChart from "../../components/Dashboard/PieChart"
import LineChart from "../../components/Dashboard/LineChart"
import "./dashboardstatitics.css"
import DoughnutChart from "../../components/Dashboard/DoughnutChart"
import axios from "axios"
import useValues from "../../hooks/useValues"
import fileDownload from "js-file-download"
export default function DashboardStatitics() {
  const [pieChart, setPieChart] = useState(false)
  const [dashboard, setDashboard] = useState(true)
  const [lineChart, setLineChart] = useState(false)
  const { valuesOtherDay, valuesToday } = useValues("btc")
  
  const showBar = () => {
    setDashboard(true)
    setLineChart(false)
    setPieChart(false)
  }
  const showLine = () => {
    setLineChart(true)
    setDashboard(false)
    setPieChart(false)
  }
  const showPie = () => {
    setPieChart(true)
    setDashboard(false)
    setLineChart(false)
  }

  const payload = useCallback(
    () => ({
      payload: [valuesToday, valuesOtherDay],
    }),
    [valuesToday, valuesOtherDay]
  )

  const downloadExcel = () => {
    const options = {
      method: "post",
      url: "http://localhost:5000/download/excel",
      responseType: "blob",
      data: payload(),
    }
    axios(options)
      .then((response) => {
        fileDownload(
          response.data,
          `${valuesOtherDay.symbol_crypto}-values.xlsx`
        )
      })
      .catch((err) => console.error(err))
  }

  return (
    <section
      className="dashboard border shadow-lg my-4"
      style={{ paddingLeft: "1em" }}
    >
      <h4 className="lead display-6">BTC Ultimo mes</h4>
      <hr className="text-primary mb-4" />
      <div className="row">
        <div className="col-md-9 col-sm-12">
          {dashboard ? <Dashboard /> : null}
          {pieChart ? <PieChart width={500} height={500} /> : null}
          {lineChart ? <LineChart width={500} height={300} /> : null}
        </div>

        <div className="col-md-3 col-sm-12 mb-4">
          <div className="my-3">
            <button className={!dashboard ? "btn btn-outline-primary" : "btn btn-primary"} onClick={showBar}>
              <i className="fas fa-chart-bar"></i>
            </button>
            <p className="form-text lead">Bar Chart</p>
          </div>
          <hr />
          <div className="my-3">
            <button className={!lineChart ? "btn btn-outline-primary" : "btn btn-primary"} onClick={showLine}>
              <i className="fas fa-chart-line"></i>
            </button>
            <p className="form-text lead">Line Chart</p>
          </div>
          <hr />
          <div className="my-3">
		        <button className={!pieChart ? "btn btn-outline-primary" : "btn btn-primary"} onClick={showPie}>
              <i className="fas fa-chart-pie"></i>
            </button>
            <p className="form-text lead">Pie Chart</p>
          </div>
          <hr />
          <div className="my-3">
            <button className="btn btn-outline-success" onClick={downloadExcel}>
              <i className="fas fa-file-excel"></i>
            </button>
            <p className="form-text lead">Exportar Excel</p>
          </div>
        </div>
      </div>
      <h4 className="lead display-6 my-3">BTC Hoy</h4>
      <hr className="text-primary" />

      <div className="container mb-4 row">
        <div className="col-md-9">
          <DoughnutChart width={500} height={400} />
        </div>

        <div className="col-md-3">
          <p className="lead mx-4">
            ARS: <i className="fas fa-dollar-sign text-primary"></i> 4,414,892
          </p>
          <p className="lead mx-4">
            MXN: <i className="fas fa-dollar-sign text-primary"></i> 864,902
          </p>
          <p className="lead mx-4">
            EUR: <i className="fas fa-euro-sign text-primary"></i> 37,253
          </p>
        </div>
      </div>
    </section>
  )
}
