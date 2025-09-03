import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactFrom";
import Header from "./components/Header";
import { Hero } from "./components/hero";
import { TechStack } from "./components/TechStack";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header></Header>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
