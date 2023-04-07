import {React, useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contacto, setContacto] = useState({
    nombre: '',
    email: ''
  })
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(contacto.nombre.length > 5 && (contacto.email !== '' && contacto.email !== 'undefined')){
        setShow(true)
        setErr(false)
    } else {
        setShow(false)
        setErr(true)
    }
  } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresa tu nombre" value={contacto.nombre} onChange={(e) => setContacto({...contacto, nombre: e.target.value})}/>
        <input type="email" placeholder="Ingresa tu email" value={contacto.email} onChange={(e) => setContacto({...contacto, email: e.target.value})}/>
        <button>Enviar</button>
      </form>
      {err && 'Por favor verifique su información nuevamente.'}
      {show && 'Gracias ' + contacto.nombre + ', te contactaremos cuanto antes vía mail.'}
    </div>
  );
};

export default Form;
