import React, { useRef } from "react";
import "./CatalogoContainer.css";
import CardCatalogo from "./CardCatalogo";
export const CatalogoContainer = ({ catalogo }) => {
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRefPrev = useRef(null);
  const buttonRefPrev2 = useRef(null);
  const handleClick = () => {
    // Simula un clic en el botón
    buttonRef.current.click();
    buttonRef2.current.click();
  };
  const handleClickPrev = () => {
    // Simula un clic en el botón
    buttonRefPrev.current.click();
    buttonRefPrev2.current.click();
  };
  return (
    <section id="catalogo" className="CatalogoContainer container-md">
      <h3 className="CatalogoContainer-title">Catalogo de productos</h3>
      <p className="CatalogoContainer-txt">
        Explora nuestro catálogo de productos y escríbenos si quieres
        personalizarlo o tienes alguna duda!
      </p>
      <div className="carrousel-catalogo-container">
        <div
          id="carouselExampleControls"
          className="carousel slide container carousel-catalogo "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CardCatalogo
                title={catalogo[0].title}
                desc={catalogo[0].desc}
                precio={catalogo[0].precio}
              />
            </div>
            <div className="carousel-item">
              <CardCatalogo
                title={catalogo[1].title}
                desc={catalogo[1].desc}
                precio={catalogo[1].precio}
              />
            </div>
            <div className="carousel-item">
              <CardCatalogo
                title={catalogo[2].title}
                desc={catalogo[2].desc}
                precio={catalogo[2].precio}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            onClick={handleClickPrev}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            ref={buttonRef2}
          >
            <span
              className="carousel-control-next-icon btn-carousel-next"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          id="carouselExampleControls2"
          className="carousel slide container carousel-catalogo other "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CardCatalogo
                title={catalogo[1].title}
                desc={catalogo[1].desc}
                precio={catalogo[1].precio}
              />
            </div>
            <div className="carousel-item">
              <CardCatalogo
                title={catalogo[2].title}
                desc={catalogo[2].desc}
                precio={catalogo[2].precio}
              />
            </div>
            <div className="carousel-item">
              <CardCatalogo
                title={catalogo[0].title}
                desc={catalogo[0].desc}
                precio={catalogo[0].precio}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="prev"
            ref={buttonRefPrev2}
          >
            {/* <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span> */}
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="next"
            ref={buttonRef}
          >
            {/* <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span> */}
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          id="carouselExampleControls3"
          className="carousel slide container carousel-catalogo other "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CardCatalogo
                title={catalogo[2].title}
                desc={catalogo[2].desc}
                precio={catalogo[2].precio}
              />
            </div>
            <div className="carousel-item">
              <CardCatalogo
                title={catalogo[0].title}
                desc={catalogo[0].desc}
                precio={catalogo[0].precio}
              />
            </div>
            <div className="carousel-item">
              <CardCatalogo
                title={catalogo[1].title}
                desc={catalogo[1].desc}
                precio={catalogo[1].precio}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls3"
            data-bs-slide="prev"
            ref={buttonRefPrev}
          >
            {/* <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span> */}
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls3"
            data-bs-slide="next"
            onClick={handleClick}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
