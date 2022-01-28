// import "./index.css"
import Dashboard from "../../components/Dashboard/Dashboard"
import BartChart from "../../components/Dashboard/BarChart"
import React, { useState, useEffect, useCallback } from "react"
import PieChart from "../../components/Dashboard/PieChart"
import LineChart from "../../components/Dashboard/LineChart"
import "../DashboardStatitics/dashboardstatitics.css"
import DoughnutChart from "../../components/Dashboard/DoughnutChart"
import axios from "axios"
import useValues from "../../hooks/useValues"
import fileDownload from "js-file-download"
export default function DashboardStatitics() {
  const [pieChart, setPieChart] = useState(false)
  const [dashboard, setDashboard] = useState(true)
  const [lineChart, setLineChart] = useState(false)
  const { valuesOtherDay, valuesToday } = useValues()

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
      style={{ "padding-left": "1em" }}
    >
      <h4 className="lead display-6">BTC Hoy - 2022-01-24</h4>
      <hr className="text-primary mb-4" />
      <div className="row">
        <div className="col-md-9 col-sm-12">
          {dashboard ? <Dashboard /> : null}
          {pieChart ? <PieChart width={500} height={500} /> : null}

          {lineChart ? <LineChart width={500} height={300} /> : null}
        </div>

        <div className="col-md-3 col-sm-12 mb-4">
          <div className="my-3">
            {!lineChart ? (
              <button
                className="btn btn-outline-primary"
                onClick={lineChartEnabled}
              >
                <i class="fas fa-chart-line"></i>
              </button>
            ) : (
              <button className="btn btn-danger" onClick={lineChartDisabled}>
                <i class="fas fa-chart-line"></i>
              </button>
            )}
          </div>
          <hr />
          {!pieChart ? (
            <button
              className="btn btn-outline-primary"
              onClick={pieChartEnabled}
            >
              <i class="fas fa-chart-pie"></i>
            </button>
          ) : (
            <button className="btn btn-danger" onClick={pieChartDisabled}>
              <i class="fas fa-chart-pie"></i>
            </button>
          )}
          <hr />
          <div className="my-3">
            <button className="btn btn-outline-success" onClick={downloadExcel}>
              <i class="fas fa-file-excel"></i>
            </button>
            <p className="form-text lead">Exportar a excel</p>
          </div>
        </div>
      </div>
      <h4 className="lead display-6 my-3">BTC Hoy</h4>
      <hr className="text-primary" />

      <div className="container mb-4 mx-5 row">
        <div className="col-md-9">
          <DoughnutChart width={500} height={400} />
        </div>

        <div className="col-md-3">
          <p className="lead mx-4">
            USD: <i class="fas fa-dollar-sign text-primary"></i>{" "}
            {valuesToday ? valuesToday.usd : 0}
          </p>
          <p className="lead mx-4">
            MXN: <i class="fas fa-dollar-sign text-primary"></i>{" "}
            {valuesToday ? valuesToday.mxn : 0}
          </p>
          <p className="lead mx-4">
            EUR: <i class="fas fa-euro-sign text-primary"></i>{" "}
            {valuesToday ? valuesToday.eur : 0}
          </p>
        </div>
      </div>
    </section>
  )
}
