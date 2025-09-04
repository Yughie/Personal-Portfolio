import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactFrom";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <TechStack></TechStack>
      </div>
    </>
  );
}

export default App;
