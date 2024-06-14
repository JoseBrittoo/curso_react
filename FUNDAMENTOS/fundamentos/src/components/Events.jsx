const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Rederiza aqui!</h1>;
    } else {
      return <h1>Renderiza isso tbm!</h1>;
    }
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div>
          <button onClick={() => console.log("Clicou!")}>
            Clique aqui também!
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (true) {
                console.log("Isso não é legal!");
              }
            }}
          >
            Clique aqui, pfvr.
          </button>
        </div>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
