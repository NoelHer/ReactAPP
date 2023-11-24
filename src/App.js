import React from "react";
import { Header } from "./componentes/Header/Index";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./src/componentes/Paginas.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Paginas/>
        </Router>
    </div>
  );
}

export default App;
