import React from 'react'
import IMG from "../../img/2.png";
import IMG3 from "../../img/3.png";
import IMG4 from "../../img/4.png";
import IMG5 from "../../img/5.png";
import IMG1 from "../../img/12.png";
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
            <h1> Reboso </h1>
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
              <img src={IMG3} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Pantalon </h1>
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
              <img src={IMG4} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Falda </h1>
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
              <img src={IMG5} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Camisa </h1>
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
              <img src={IMG1} alt=''></img>
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Blusa </h1>
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