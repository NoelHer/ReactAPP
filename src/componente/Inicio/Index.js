import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from "../../../img/Logo.png";
const Inicio = () => {
  return (
    <div className='inicio'>
     
     <Link to="/">
        <h1>INICIO</h1>
        </Link> 
        <Link>
        <h1 className='title'>PRODUCTOS</h1>
        </Link>
        <img src='Logo.png' alt=''></img>
    </div>
  )
}

export default Inicio;