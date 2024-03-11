import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Card } from "./components/card/card";
import { data } from "./data";
import "./reset.css";
import "./App.css";
import { CardList } from "./components/card/card-list";

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
      <CardList />
    </div>
  );
}

export default App;
