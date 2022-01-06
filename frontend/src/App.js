import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Retail from "./components/Retail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="section-retail">
        <Retail />
      </section>
      <Retail />
      <Footer />
    </div>
  );
}

export default App;
