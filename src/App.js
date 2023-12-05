import { useState } from 'react';
import './index.css';
import { Header } from "./componentes/Header/Index";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Pagina } from "./componentes/Pagina/Pagina";

function App() {
  return (
   <Router>
    <Header />
    <Pagina/>
   </Router>
  )
}
export default App;