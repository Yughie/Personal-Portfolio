import "./App.css";
import Header from "./components/Header";
import { Hero } from "./components/hero";
import TechStack from "./components/TechStack.jsx";
import Career from "./components/Career.jsx";
import Showcase from "./components/showcase";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <TechStack></TechStack>
        <Career></Career>
        <Showcase></Showcase>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default App;
