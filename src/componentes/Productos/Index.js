import React from 'react'
import { Link } from "react-router-dom";
import IMG from "../../img/4.png";

export const ProductosLista = () => {
  return (
    <>
      <h1 className='title'>PRODUCTOS</h1>
      <div className='productos'>
        <div className='producto'>
          <a href='#'>
            <div className='producto_img'>
              <img src={IMG} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$750</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto_img'>
              <img src={IMG} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$750</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto_img'>
              <img src={IMG} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$750</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
         <div className='producto'>
          <a href='#'>
            <div className='producto_img'>
              <img src={IMG} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$750</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        <div className='producto'>
          <a href='#'>
            <div className='producto_img'>
              <img src={IMG} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Title </h1>
            <p> Categoria </p>
            <p className='price'>$750</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
            <div>
              <a href='#' className='btn'>Vista</a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
