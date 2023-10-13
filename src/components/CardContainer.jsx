import React from "react";
import Card from "./Card";
import "./CardContainer.css";
const CardContainer = ({ product, icono }) => {
  return (
    <section id="products" className="products container-md">
      <Card
        img={product[0].img}
        title={product[0].title}
        desc={product[0].desc}
        icono={icono}
        list={product[0].list}
      />
      <Card
        img={product[1].img}
        title={product[1].title}
        desc={product[1].desc}
        icono={icono}
        list={product[1].list}
      />
      <Card
        img={product[2].img}
        title={product[2].title}
        desc={product[2].desc}
        icono={icono}
        list={product[2].list}
      />
    </section>
  );
};

export default CardContainer;
