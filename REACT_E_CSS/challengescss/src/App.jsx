import "./App.css";
import Car from "./components/Car";

function App() {
  const myCars = [
    { id: 1, name: "Fusca", km: 1000, color: "Black" },
    { id: 2, name: "Onix", km: 2000, color: "Gree" },
    { id: 3, name: "Toyta", km: 10, color: "Red" },
  ];

  return (
    <>
      <div>
        <h1>Showrrom de carro</h1>
        <div className="car-container">
          {myCars.map((car) => (
            <Car 
            key={car.id}
            car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
