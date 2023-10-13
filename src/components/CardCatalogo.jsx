import React from "react";
import "./CardCatalogo.css";
const CardCatalogo = ({ title, desc, precio }) => {
  return (
    <>
      <div className="card">
        <img
          src="https://i.pinimg.com/550x/6f/e7/9b/6fe79be786f9887039d79503816a633f.jpg"
          className="card-img-top"
          alt="..."
          width={100}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <div className="card-price">
            <h3>{precio}</h3>
            <a href="#" className="btn">
              Ordenar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCatalogo;
