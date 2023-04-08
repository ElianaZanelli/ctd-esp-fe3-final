import React from 'react'
import Card from '../Components/Card'
import { useOdontologoStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {globalState} = useOdontologoStates()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {globalState.data.map(odontologo => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)}
      </div>
    </main>
  )
}

export default Home