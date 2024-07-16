import { Fragment, useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRander from "./components/ListRander";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDeatals from "./components/UserDeatals";

function App() {
  //const name = "joao";
  const [userName] = useState("Mara");
  const cars = [
    { id: 1, brand: "ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "fusca", color: "Verde", newCar: false, km: 12487 },
    { id: 3, brand: "kia", color: "Azul", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  // array de usuarios
  const users =[
    {id: 1, name: "José", job:"Programador", age: 22},
    {id: 2, name:"Maria", job:"Professora", age: 29},
    {id: 3, name:"Renan", job:"Admin", age:30},
    {id: 4, name:"Paulo", job:"Aprendiz", age:15},
  ]

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
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* fragment */}
      <Fragments propFragments="teste"/>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* desafio */}
      {users.map((users) => (
        <UserDeatals
        key={users.id}
        name={users.name}
        job={users.job}
        age={users.age}
        />
      ))}
    </>
  );
}

export default App;
