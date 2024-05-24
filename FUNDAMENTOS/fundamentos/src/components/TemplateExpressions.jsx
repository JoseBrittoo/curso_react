const TemplateExpressions = () => {
  const name = "José";
  const data = {
    age: 22,
    job: "Estagiário",
  };

  return (
    <div>
      <h2>Olá {name}, td bem?</h2>
      <p>Você trabalha como: {data.job}</p>
      <p>Você tem {data.age} anos.</p>
    </div>
  );
};

export default TemplateExpressions;
