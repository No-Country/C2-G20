import "./App.css";
import Header from "./components/Header";

import logo from "./logo.svg";
import "./App.css";
import Retail from "./components/Retail";
import Footer from "./components/Footer";

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
