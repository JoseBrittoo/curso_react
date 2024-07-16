import React from 'react'

const UserDeatals = ({name, job, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Job: {job}</p>
        {age >= 18 ? (<p>Pode tirar cnh!</p>) : (<p>Menor de idade!</p>)}
    </div>
  )
}

export default UserDeatals