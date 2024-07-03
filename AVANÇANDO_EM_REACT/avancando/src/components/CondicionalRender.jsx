import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("Fran")
  return (
    <div>
        <h1>Isso será mostrado?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        <h1>If ternário</h1>
        {name === "Alessandra" ? (
            <div>
                <p>O nome é Alessandra</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Alessandra")}>Clique aqui!</button>
    </div>
  );
};

export default CondicionalRender