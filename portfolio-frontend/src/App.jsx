import "./App.css";
import Header from "./components/Header";
import { Hero } from "./components/hero";
import TechStack from "./components/TechStack";
import Career from "./components/Career";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <TechStack></TechStack>
        <Career></Career>
      </div>
    </>
  );
}

export default App;
