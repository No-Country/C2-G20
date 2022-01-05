<<<<<<< HEAD
import "./App.css"
import Header from "./components/Header"
=======
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Retail from "./components/Retail";
import Footer from "./components/Footer";
>>>>>>> f1381db51d6f50ae9e64809af72b50762bcec269

function App() {
  return (
    <div className="App">
      <Header />
      <section className="section-retail">
        <Retail />
      </section>
    </div>
  );
}

export default App;
