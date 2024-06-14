const Challenge = () => {

    const valor1 = 100;
    const valor2 = 112;
    
    return(
        <div>
            <p>Primeiro valor: {valor1}</p>
            <p>Segundo valor: {valor2}</p>
            <button onClick={() => console.log(valor1 +valor2)}>Somar</button>
        </div>
    );
};

export default Challenge;

