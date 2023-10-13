import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
const ScreenCobertura = () => {
  return (
    <div className="screen container-md">
      <div className="btnScreen">
        <AiOutlineClose />
      </div>
      <img src={logo} alt="" width={200} />
      <p>
        Genial! esta zona cuenta con cobertura para disfrutes con los mejores
        detalles que puedas encontrar para fechas especiales
      </p>
    </div>
  );
};

export default ScreenCobertura;
