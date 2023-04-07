
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useOdontologoStates } from './Components/utils/global.context'



function App() {
  const {globalState} = useOdontologoStates()
  return (
      <div className = {"App "+ globalState.theme.name}>
        <Navbar/>
        <Routes>
          <Route path= '/' element = {<Home/>}></Route>
          <Route path= '/favs' element = {<Favs/>}></Route>
          <Route path= '/dentist/:id' element = {<Detail/>}></Route>
          <Route path= '/contact' element = {<Contact/>}></Route>
        </Routes>
        <Footer/>

      </div>
  );
}

export default App;
