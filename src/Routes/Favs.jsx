import React from "react";
import Card from "../Components/Card";
import { useOdontologoStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

const {globalState} = useOdontologoStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {globalState.favs.map(odontologo => <Card  key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
