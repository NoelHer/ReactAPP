import React from 'react'
import { Route } from 'react-router-dom';
import { Inicio } from "./Inicio/Index";
import { ProductosLista } from '../Productos/Index';
const Pagina = () => {
  return (
    <section>
      <Route>
        <Route path='/' exact Component={Inicio}/>
        <Route path='/producto' exact Component={ProductosLista}/>
        </Route>  
    </section>
  )
}

export default Pagina;