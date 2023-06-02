import React from "react";
import '../hojas-de-estilo/Boton.css';

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <button 
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}
    >
      {texto}
    </button>
  )
};

export default Boton;