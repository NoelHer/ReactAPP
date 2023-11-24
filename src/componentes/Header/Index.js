import React from 'react'
import Logo from "../../img/Logo.png";
export const Header = () => {
  return (
      <header>
        <a href='#'>
          <div className='logo'>
            <img src={Logo} alt="logo" width="150" />
          </div>
        </a>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href='#'>Productos</a>
          </li>
        </ul>
        <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className='item_total'>0</span>
        </div>
      </header>
  )
}
