import MyComponent from "./MyComponent";

const FirstComponent = () => {
  return (
    <div>
        {/*algum comentario*/}
      <h2>Meu primeiro componente</h2>
      <p className="teste">Meu texto</p>
      <MyComponent/>
    </div>
  );
};

export default FirstComponent;
