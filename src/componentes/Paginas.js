import React from 'react'
import { Switch, Router} from "react-router-dom";

import { ProductosLista } from "./Productos/Index";

export const Paginas = () => {
  return (
    <section>
        <Switch>
            <Router path='/' exact Component=""></Router>
            <Router path='/componentes' exact Component={ProductosLista}></Router>

        </Switch>
    </section>
  )
}
