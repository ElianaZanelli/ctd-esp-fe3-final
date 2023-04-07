import { createContext, useContext, useEffect, useReducer} from "react";

const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const themes = {
  dark: {
    theme: false,
    name: 'dark'
  },
  light: {
    theme: true,
    name: 'light'
  }
}

export const initialState = {theme: themes.light, data: [], favs: initialFavState, odontologoDetail:{}}
const ContextGlobal = createContext(undefined);

const globalReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAV':
      alert("Se ha añadido a favoritos");
      return { theme: state.theme, data: state.data, favs: [...state.favs, action.payload], odontologoDetail: state.odontologoDetail}
    case 'TOGGLE_THEME': 
      return { theme: state.theme.theme ? themes.dark : themes.light, data: state.data, favs: state.favs, odontologoDetail: state.odontologoDetail}
    case 'GET_ODONTOLOGOS':
      return {theme: state.theme, data: action.payload, favs: state.favs, odontologoDetail: state.odontologoDetail}
      case 'GET_ODONTOLOGO_DETAILS':
        return {theme: state.theme, data: state.data, favs: state.favs, odontologoDetail: action.payload}
      default:
        throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  const url= 'https://jsonplaceholder.typicode.com/users'

  const [globalState, globalDispatch] = useReducer(globalReducer, initialState)

  useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(globalState.favs))
  }, [globalState.favs])


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => globalDispatch({type: 'GET_ODONTOLOGOS', payload: data}))
  },[])

  return (
    <ContextGlobal.Provider value={{
      globalState, globalDispatch
      }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useOdontologoStates = () => useContext(ContextGlobal)