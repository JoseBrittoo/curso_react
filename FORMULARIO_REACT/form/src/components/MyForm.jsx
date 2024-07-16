import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  //   console.log(name);
  //   console.log(email);

  const handleSubmit = (e) => {
    e.preventDefult();
    console.log("Enviando formulario");
    console.log(name, email);
  };

  return (
    <div>
      {/* 5 - enviod e forms */}
      <form onSubmit={handleSubmit}>
        {/* 1 - criando forms */}
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>

        {/* 2 - label envolvendo input */}
        <label>
          Email
          {/* 4 - simplificação de state */}
          <input
            
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
