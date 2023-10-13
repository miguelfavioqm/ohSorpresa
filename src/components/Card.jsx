import React, { useEffect, useState } from "react";
import "./Card.css";
import img from "../assets/iconopastel.png";
const Card = ({ img, title, desc, icono, list }) => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    setDatos(list);
  }, []);
  return (
    <div className="carta">
      <img src={img} alt="" width={100} className="carta-img" />
      <h1 className="carta-title">{title}</h1>
      <p className="carta-text">{desc}</p>
      <ul>
        {list.map((dato, indice) => {
          return (
            <li key={indice} className="carta-item">
              <span className="carta-icono">
                <img src={icono} alt="" />
              </span>
              <p>{dato}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
