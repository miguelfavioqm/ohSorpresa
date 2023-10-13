import React from "react";
import "./Footer.css";
import img from "../assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={img} alt="" />
        <h4>Términos y condiciones </h4>
        <div className="footer-container-contact">
          <h4>Contacto</h4>
          <a
            href="https://api.whatsapp.com/send?phone=5218134783366&text=Hola"
            target="_blank"
          >
            +52 81 3478 3366
          </a>
        </div>
        <div className="footer-container-redes">
          <h4>Redes sociales</h4>
          <div>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <AiOutlineInstagram />
            </a>
            <a href="#">
              <BiLogoSnapchat />
            </a>
          </div>
        </div>
      </div>
      <p>Copyright 2022 todos los derechos reservados </p>
    </footer>
  );
};

export default Footer;
