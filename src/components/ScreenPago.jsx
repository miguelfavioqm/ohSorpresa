import React from "react";
import "./ScreenPago.css";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
const ScreenPago = () => {
  return (
    <div className="screen container-md">
      <div className="btnScreen">
        <AiOutlineClose />
      </div>
      <img src={logo} alt="" width={200} />
      <p>
        Escoge el método de pago que deseas utilizar y serás redirigido al
        WhatsApp para confirmar la orden y detalles del pedido
      </p>
      <h3>Métodos de pago</h3>

      <button className="btn-pago">
        <span>BBVA</span> <span>4152 3138 0636 8127</span>
      </button>
      <button className="btn-pago">
        <span>
          SPIN <br />
          by oxxo
        </span>
        <span>4217 4700 3914 3041</span>
      </button>
      <button className="btn-pago">
        <span>Efectivo</span> <span>Pagas cuando llegue</span>
      </button>
    </div>
  );
};

export default ScreenPago;
