import React from 'react'
//import { useOdontologoStates } from '../Components/utils/global.context';



const Footer = () => {

  //const { themeState } = useOdontologoStates()

  return (
    <footer>
        <div>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
        </div>
        <div className='redes'> 
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
    </footer>
  )
}

export default Footer
