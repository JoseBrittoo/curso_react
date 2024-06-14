import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <h1>Olá</h1>
          {/* Imgem em public */}
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        <div>
          {/* Imagem em asset */}
          <img src={City} alt="City" />
        </div>
      </div>
      <ManageData/>
    </>
  );
}

export default App;
