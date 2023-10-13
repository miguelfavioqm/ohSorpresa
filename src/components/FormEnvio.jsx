import React, { useState } from "react";
import "./FormEnvio.css";
import logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
const FormEnvio = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipoDomicilio, setTipoDomicilio] = useState("");
  const [adicionales, setAdicionales] = useState("");
  function handleSubmit(event) {
    console.log(nombre + direccion + tipoDomicilio + adicionales);
    event.preventDefault();
  }
  return (
    <div>
      <div className="screen container-md">
        <div className="btnScreen">
          <AiOutlineClose />
        </div>
        <img src={logo} alt="" width={200} />
        <h3>Datos del envio</h3>
        <h4>Todos los datos son obligatorios</h4>
        <form onSubmit={handleSubmit} className="formDatosEnvio" action="">
          <label>
            Nombre quién recibe
            <input
              type="text"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Dirección
            <input
              type="text"
              onChange={(e) => {
                setDireccion(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Tipo de domicilio
            <input
              type="text"
              onChange={(e) => {
                setTipoDomicilio(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Adicionales
            <textarea
              name=""
              id=""
              onChange={(e) => {
                setAdicionales(e.target.value);
              }}
            ></textarea>
          </label>
          <button type="submit" className="btn-guardar">
            GUARDAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEnvio;
