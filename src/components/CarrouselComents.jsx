import React, { useRef } from "react";
import CardComent from "./CardComent";
import "./CarrouselComents.css";
const CarrouselComents = ({ coments }) => {
  const buttonRefC = useRef(null);
  const handleClick = () => {
    // Simula un clic en el botón
    buttonRefC.current.click();
  };
  return (
    <section>
      <h3 className="title">Lo que dicen nuestros clientes</h3>
      <div className="coments container-md">
        <div id="carouselExampleCaptions2" className="carousel slide uno">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="0"
              className="active btn-carrousel"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="btn-carrousel"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CardComent
                txt={coments[0].txt}
                nombre={coments[0].nombre}
                img={coments[0].img}
              />
            </div>
            <div className="carousel-item">
              <CardComent
                txt={coments[1].txt}
                nombre={coments[1].nombre}
                img={coments[1].img}
              />
            </div>
            <div className="carousel-item">
              <CardComent
                txt={coments[2].txt}
                nombre={coments[2].nombre}
                img={coments[2].img}
              />
            </div>
            <div className="carousel-item">
              <CardComent
                txt={coments[3].txt}
                nombre={coments[3].nombre}
                img={coments[3].img}
              />
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          <button
            className="carousel-control-next btn-next-comments"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="next"
            ref={buttonRefC}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div id="carouselExampleCaptions3" className="carousel slide dos">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="0"
              className="active btn-carrousel"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="btn-carrousel"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CardComent
                txt={coments[3].txt}
                nombre={coments[3].nombre}
                img={coments[3].img}
              />
            </div>
            <div className="carousel-item">
              <CardComent
                txt={coments[2].txt}
                nombre={coments[2].nombre}
                img={coments[2].img}
              />
            </div>
            <div className="carousel-item">
              <CardComent
                txt={coments[1].txt}
                nombre={coments[1].nombre}
                img={coments[1].img}
              />
            </div>
            <div className="carousel-item">
              <CardComent
                txt={coments[0].txt}
                nombre={coments[0].nombre}
                img={coments[0].img}
              />
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions3"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions3"
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

export default CarrouselComents;
