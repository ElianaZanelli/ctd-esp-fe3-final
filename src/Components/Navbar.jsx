import React from 'react'
import { Link } from 'react-router-dom'
import { useOdontologoStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {globalState, globalDispatch} = useOdontologoStates()

  const toggleTheme = () => {
    globalDispatch({ type: 'TOGGLE_THEME'});
  };

  return (
    <nav className={globalState.theme.name}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to = '/'><h3>Home</h3></Link>
      <Link to = '/favs'><h3>Favs</h3></Link>
      <Link to = '/contact'><h3>Contact</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>{globalState.theme.theme ? '🌙' : '🌞'}</button>
    </nav>
  )
}

export default Navbar