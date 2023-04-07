import React from "react";
import { useOdontologoStates } from '../Components/utils/global.context';




const Card = ({ name, username, id }) => {
  let card = {
    name: name,
    username: username,
    id: id
  }
  const {globalDispatch, globalState} = useOdontologoStates()
  const addFav = ()=>{
    globalDispatch({type: 'ADD_FAV', payload: card})
  }

  return (
    <div className={"card " + globalState.theme.name}>
        <img className="imgDoctor" src="./images/doctor.jpg" alt=""/>
        <h4>{name}</h4>
        <p>{username}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
