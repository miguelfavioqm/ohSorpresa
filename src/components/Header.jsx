import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../assets/logo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./Header.css";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header id="header" className="header">
      <img src={img} alt="" />
      <GiHamburgerMenu
        onClick={() => {
          setMenu(!menu);
        }}
        className="header-btn-menu"
      />
      <ul className="header-list">
        <li>
          <a href="#header">INICIO</a>
        </li>
        <li>
          <a href="#products">PRODUCTOS</a>
        </li>
        <li>
          <a href="#catalogo">CATALOGO</a>
        </li>
        <li>
          <a href="#cobertura">COBERTURA</a>
        </li>
      </ul>
      <div className={"menu " + (menu ? "activado" : "desactivado")}>
        <button
          className="btn-menu"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <AiFillCloseCircle />
        </button>
        <ul>
          <li>
            <a
              onClick={() => {
                setMenu(!menu);
              }}
              href="#header"
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenu(!menu);
              }}
              href="#products"
            >
              PRODUCTOS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenu(!menu);
              }}
              href="#catalogo"
            >
              CATALOGO
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setMenu(!menu);
              }}
              href="#cobertura"
            >
              COBERTURA
            </a>
          </li>
        </ul>
        <img src={logo} alt="" width={100} />
      </div>
    </header>
  );
};

export default Header;
