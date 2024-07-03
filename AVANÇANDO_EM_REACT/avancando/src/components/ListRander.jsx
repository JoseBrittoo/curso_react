import { useState } from 'react'

const ListRander = () => {
    const [list] = useState(["mateus", "pedro", "josé"]);

    //ex na pratica, como geralmente acontece
    const [users, setUsers] = useState([
        {id: 1, name: "jose", age: 22},
        {id: 2, name: "joao", age: 32},
        {id: 3, name: "lucas", age: 18},
    ]);

    const deleteRandom = () =>{
        //pegando id aleatorio
       const randomNumber = Math.floor(Math.random() * 4);
       
       //deletar
       setUsers((prevUsers) => {
        console.log(prevUsers);
        return prevUsers.filter((user) => randomNumber !== user.id);
       })
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}> {item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
};

export default ListRander