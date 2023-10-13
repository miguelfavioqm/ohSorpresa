import React from "react";
import "./Carrousel.css";
import img from "../assets/rosas.png";
const Carrousel = ({
  titulo1,
  txt1,
  imgmobile1,
  imgdesktop1,
  titulo2,
  txt2,
  imgmobile2,
  imgdesktop2,
  titulo3,
  txt3,
  imgmobile3,
  imgdesktop3,
  titulo4,
  txt4,
  imgmobile4,
  imgdesktop4,
}) => {
  return (
    <>
      <div className="carrousel mobile">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active btn-carrousel"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="btn-carrousel"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imgmobile1}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption ">
                <h5>{titulo1}</h5>
                <p>{txt1}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgmobile2}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>{titulo2}</h5>
                <p>{txt2}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgmobile3}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>{titulo3}</h5>
                <p>{txt3}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgmobile4}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>{titulo4}</h5>
                <p>{txt4}</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="carrousel desktop">
        <div id="carouselExampleCaptionsd" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsd"
              data-bs-slide-to="0"
              className="active btn-carrousel"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsd"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsd"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="btn-carrousel"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptionsd"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="btn-carrousel"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imgdesktop1}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption ">
                <h5>{titulo1} </h5>
                <p>{txt1}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgdesktop2}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>{titulo2}</h5>
                <p>{txt2}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgdesktop3}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>{titulo3}</h5>
                <p>{txt3}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imgdesktop4}
                className="d-block w-100 imagen"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>{titulo4}</h5>
                <p>{txt4}</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptionsd"
            data-bs-slide="prev"
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
            data-bs-target="#carouselExampleCaptionsd"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
