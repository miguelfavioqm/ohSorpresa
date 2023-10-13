import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
const ScreenNoCobertura = () => {
  return (
    <div className="screen container-md">
      <div className="btnScreen">
        <AiOutlineClose />
      </div>
      <img src={logo} alt="" width={200} />
      <p>
        Lo sentimos ! En este momento esta zona no tiene cobertura para
        OH-SORPRESA
      </p>
    </div>
  );
};

export default ScreenNoCobertura;
