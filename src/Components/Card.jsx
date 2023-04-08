import React from "react";
import { Link } from 'react-router-dom'
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
    <div className="card">
      {<Link key={id} to={'/dentist/' + id}>
        <div className={ globalState.theme.name }>
            <img className="imgDoctor" src="./images/doctor.jpg" alt=""/>
            <h4>{name}</h4>
            <p>{username}</p>

            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            
        </div>
      </Link>}
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
