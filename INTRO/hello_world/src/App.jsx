import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>✨Primeiro exercicio react✨</h1>
      <h2>Vamos aprender um pouco sobre react</h2>
      <ul>
        <li>💖Front-end</li>
        <li>💖Análise de daddos</li>
        <li>💖UI/UX</li>
      </ul>
    </>
  );
}

export default App;
