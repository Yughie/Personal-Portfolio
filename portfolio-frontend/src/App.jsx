import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./ContactFrom";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header></Header>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default App;
