import React from "react";
import "./ScreenTelefono.css";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
const ScreenTelefono = () => {
  return (
    <div className="screen container-md">
      <div className="btnScreen">
        <AiOutlineClose />
      </div>
      <img src={logo} alt="" width={200} />
      <p>
        Escribe tu numero de teléfono para validar si ya estas registrado en
        OH-Sorpresa!
      </p>
      <label className="input-telefono">
        Teléfono
        <input type="text" />
      </label>
      <button className="btn-validar-telefono">Validar</button>
    </div>
  );
};

export default ScreenTelefono;
