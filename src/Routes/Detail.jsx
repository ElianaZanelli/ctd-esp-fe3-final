import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useOdontologoStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {id} = useParams()
  const url='https://jsonplaceholder.typicode.com/users/'+id

  const {globalDispatch, globalState} = useOdontologoStates()

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => globalDispatch({type: 'GET_ODONTOLOGO_DETAILS', payload: data}))
  },[url, globalDispatch])

  return (
    <div className="">
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table className="" id="tabla">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{globalState.odontologoDetail.name}</td>
            <td>{globalState.odontologoDetail.email}</td>
            <td>{globalState.odontologoDetail.phone}</td>
            <td>{globalState.odontologoDetail.website}</td>
          </tr>
        </tbody>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </table>
    </div>
  )
}

export default Detail