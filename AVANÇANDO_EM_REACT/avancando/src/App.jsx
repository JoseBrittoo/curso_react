import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRander from "./components/ListRander";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "joao";
  const [userName] = useState("Mara");
  const cars = [
    { id: 1, brand: "ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "fusca", color: "Verde", newCar: false, km: 12487 },
    { id: 3, brand: "kia", color: "Azul", newCar: true, km: 0 },
  ];

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
      <ManageData />
      <ListRander />
      <CondicionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/*desestruturando*/}
      <CarDetails brand="BW" km={200} color="black" newCar={false} />
      {/*reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="red" newCar={true} />
      <CarDetails brand="Fiat" km={100} color="blue" newCar={false} />
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </>
  );
}

export default App;
