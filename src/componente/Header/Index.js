import React from 'react'
import Logo from "../../img/Logo.png";

export const Header = () => {
  return (
    <header>

      <a to="/">
        <div className="logo">
          <img src={Logo} alt="Logo" width={150} />
        </div>
      </a>
      <ul>
        <li>
          <a href="/" >Inicio</a>
        </li>
        <li>
          <a href='/Productos'>PRODUCTOS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className='item__total'>0</span>
      </div>
    </header>
  )
}