import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ModelIcons from "./components/ModelIcons";
import WhyBuy from "./components/WhyBuy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Home />
      <br />
      <ModelIcons />
      <WhyBuy />
    </div>
  );
}

export default App;
