import React from "react";
import "./cardComent.css";
import { AiFillStar } from "react-icons/ai";
const CardComent = ({ txt, nombre, img }) => {
  return (
    <div className="cardComent">
      <div className="cardComent-content">
        <p className="cardComent-content-txt">{txt}</p>
        <div className="cardComent-content-calif">
          <img src={img} alt="" width={50} className="cardComent-content-img" />
          <div>
            <h2>{nombre}</h2>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComent;
