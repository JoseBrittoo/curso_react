import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  //   console.log(name);
  //   console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    console.log(name, email, bio, role);

    // 7 - limpar forms
    setName("");
    setEmail("");
    setBio("");
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
            id="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - label envolvendo input */}
        <label>
          Email
          {/* 4 - simplificação de state */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            id="bio"
            placeholder="Descrição do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Administrador</option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
