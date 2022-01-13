import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Retail from "./components/Retail";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
