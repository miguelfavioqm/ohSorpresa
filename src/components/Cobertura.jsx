import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./Cobertura.css";
const Cobertura = () => {
  return (
    <section id="cobertura" className="cobertura container-md">
      <h2 className="cobertura-title">Cobertura</h2>
      <p>
        Asigna el nombre de tu estado, colonia o comuna en la casilla que
        aparece, para confirmar si tenemos cobertura en tu zona y poder
        brindarte el mejor servicio con nuestros productos.
      </p>
      <div className="cobertura-bar">
        <input type="text" placeholder="Escribe la zona" />
        <button>
          <BiSearchAlt2 />
        </button>
      </div>
      <iframe
        className="cobertura-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </section>
  );
};

export default Cobertura;
