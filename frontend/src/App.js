
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
import { ControlPanel } from "./pages/PanelDeControl/ControlPanel"
import { Configuracion } from "./pages/Configuracion/Configuracion"
import { Cliente } from "./pages/Cliente/Cliente"
import NavBar from "./components/Nav"


function App() {
  const { pathname } = useLocation()
  return (

    <div className="App">
      {!pathname.includes("/Dashboard") && !pathname.includes("/dashboard") ? <Home /> : <NavBar /> }
      <Routes>
        <Route path="/Dashboard" element={ <ControlPanel />} />
        <Route path="/Dashboard/Statitics" element={ <DashboardStatitics />} />
        <Route path="/Dashboard/Setting" element ={ <Configuracion />} />
        <Route path="/Dashboard/Cliente" element={ <Cliente /> } />
      </Routes>
    </div>
  )
}

export default App;
