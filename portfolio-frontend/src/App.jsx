import "./App.css";
import Header from "./components/Header.jsx";
import { Hero } from "./components/hero.jsx";
import TechStack from "./components/TechStack.jsx";
import Career from "./components/Career.jsx";
import Showcase from "./components/Showcase.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

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
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
