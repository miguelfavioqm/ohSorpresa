import React from "react";
import "./BotonCatalogo.css";
const BotonCatalogo = () => {
  return (
    <div className="btn-container">
      <a href="/prod.pdf" download="prod.pdf">
        <button className="btn-catalogo">VER CATALOGO COMPLETO</button>
      </a>
    </div>
  );
};

export default BotonCatalogo;
