import { useContext } from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Home from "./pages/Home"
import DashboardStatitics from "./pages/DashboardStatitics"
import { ControlPanel } from "./pages/PanelDeControl/ControlPanel"
import { Configuracion } from "./pages/Configuracion/Configuracion"
import { Cliente } from "./pages/Cliente/Cliente"
import NavBar from "./components/Nav"

import { CryptoContext, CryptoProvider } from "./context/CryptoContext"

function App() {
  const { auth, setAuth } = useContext(CryptoContext)
  const { pathname } = useLocation()
  return (
    <div className="App">
      <>
        <CryptoProvider value={[auth, setAuth]}>
          {!pathname.includes("/Dashboard") &&
          !pathname.includes("/dashboard") ? (
            <Home />
          ) : (
            <NavBar />
          )}
          <Routes>
            <Route path="/Dashboard" element={<ControlPanel />} />
            <Route
              path="/Dashboard/Statitics"
              element={<DashboardStatitics />}
            />
            <Route path="/Dashboard/Setting" element={<Configuracion />} />
            <Route path="/Dashboard/Cliente" element={<Cliente />} />
          </Routes>
        </CryptoProvider>
      </>
    </div>
  )
}

export default App
