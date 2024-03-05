import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar title="Alexascript Homepage" />
      <Hero
        title="Hi, I'm Alexandra Zapata"
        text="I'm Alexandra Zapata, a developer dedicated to making the world a better place one line of code at a time"
        imageUrl="/hero-pic.png"
        buttonCopy="Hire me"
      />
    </div>
  );
}

export default App;
