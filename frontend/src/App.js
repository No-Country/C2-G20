
import "./App.css"
import Header from "./components/Header"
import "./App.css"
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Home from "./pages/Home"
import DashboardStatitics from "./pages/DashboardStatitics"
import HeaderDashboard from "./components/HeaderDashboard"

function App() {
  const { pathname } = useLocation()
  return (

    <div className="App">
      {!pathname.includes("/Dashboard") ? <Home /> : <HeaderDashboard /> }
      <Routes>
        <Route path="/Dashboard/Statitics" element={<DashboardStatitics />} />
      </Routes>
    </div>
  )
}

export default App;
