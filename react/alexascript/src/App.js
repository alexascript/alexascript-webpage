import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar title={"Alexascript Homepage"} />
      <Hero />
    </div>
  );
}

export default App;
