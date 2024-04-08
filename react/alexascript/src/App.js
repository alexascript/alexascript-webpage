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
        text="I'm a passionate frontend developer from Medellin. Let's collaborate to bring your digital vision to life with creativity, precision, and a touch of magic."
        imageUrl="/hero-pic.png"
        buttonCopy="Hire me"
      />
      <CardList />
    </div>
  );
}

export default App;
