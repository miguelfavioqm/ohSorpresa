import "./App.css";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Feature from "./components/Feature";
import CardContainer from "./components/CardContainer";
import { CatalogoContainer } from "./components/CatalogoContainer";
import CarrouselComents from "./components/CarrouselComents";
import Cobertura from "./components/Cobertura";
import Footer from "./components/Footer";
import BotonCatalogo from "./components/BotonCatalogo";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useState } from "react";
import ScreenTelefono from "./components/ScreenTelefono";
import FormEnvio from "./components/FormEnvio";
import ScreenPago from "./components/ScreenPago";
import ScreenNoCobertura from "./components/ScreenNoCobertura";
import ScreenCobertura from "./components/ScreenCobertura";
function App() {
  //<----------- PARA UTILIZAR EL BACKEND Y REALIZAR LAS PETICIONES UTILIZAR LA SIGUIENTE FUNCION --------->>

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // La URL de la API que deseas consultar
  //       const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error(
  //           `Error al obtener datos de la API: ${response.status}`
  //         );
  //       }
  //       const data = await response.json();
  //       setData(data);
  //       // Cambia el estado de carga a falso
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       // Cambia el estado de carga a falso en caso de error
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5218134783366&text=Hola"
        className="btn-whatsapp"
        target="_blank"
      >
        <IoLogoWhatsapp />
      </a>
      <Header />
      <Carrousel
        titulo1={"Pequeños detalles para grandes momentos "}
        txt1={
          "Encuentra aquí esos detalles para regalar momentos de felicidad a las personas que mas quieres."
        }
        imgmobile1={"https://i.postimg.cc/Ght2bthN/rosas.png"}
        imgdesktop1={
          "https://images.unsplash.com/photo-1533467915241-eac02e856653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60"
        }
        titulo2={"Pequeños detalles para grandes momentos "}
        txt2={
          "Encuentra aquí esos detalles para regalar momentos de felicidad a las personas que mas quieres."
        }
        imgmobile2={"https://i.postimg.cc/Ght2bthN/rosas.png"}
        imgdesktop2={
          "https://images.unsplash.com/photo-1533467915241-eac02e856653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60"
        }
        titulo3={"Pequeños detalles para grandes momentos "}
        txt3={
          "Encuentra aquí esos detalles para regalar momentos de felicidad a las personas que mas quieres."
        }
        imgmobile3={"https://i.postimg.cc/Ght2bthN/rosas.png"}
        imgdesktop3={
          "https://images.unsplash.com/photo-1533467915241-eac02e856653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60"
        }
        titulo4={"Pequeños detalles para grandes momentos "}
        txt4={
          "Encuentra aquí esos detalles para regalar momentos de felicidad a las personas que mas quieres."
        }
        imgmobile4={"https://i.postimg.cc/Ght2bthN/rosas.png"}
        imgdesktop4={
          "https://images.unsplash.com/photo-1533467915241-eac02e856653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60"
        }
      />
      <Feature />
      <CardContainer
        product={[
          {
            img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/07/decorar-un-pastel-y-hacerlo-ligero-y-saludable.jpg",
            title: "Desayunos sorpresa",
            desc: "No dejes pasar ninguna fecha especial sorprendiendo con nuestro desayunos a las personas que mas quieres!",
            list: [
              "Puedes personalizarlo como tu quieras",
              "Escoge la presentación que más te guste, caja o empaque térmico",
            ],
          },
          {
            img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/07/decorar-un-pastel-y-hacerlo-ligero-y-saludable.jpg",
            title: "Desayunos sorpresa",
            desc: "No dejes pasar ninguna fecha especial sorprendiendo con nuestro desayunos a las personas que mas quieres!",
            list: [
              "Puedes personalizarlo como tu quieras",
              "Escoge la presentación que más te guste, caja o empaque térmico",
            ],
          },
          {
            img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/07/decorar-un-pastel-y-hacerlo-ligero-y-saludable.jpg",
            title: "Desayunos sorpresa",
            desc: "No dejes pasar ninguna fecha especial sorprendiendo con nuestro desayunos a las personas que mas quieres!",
            list: [
              "Puedes personalizarlo como tu quieras",
              "Escoge la presentación que más te guste, caja o empaque térmico",
            ],
          },
        ]}
        icono={"https://i.postimg.cc/qRh50WZW/iconopastel.png"}
      />
      <CatalogoContainer
        catalogo={[
          {
            title: "Caja sorpresa",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            precio: "$ 49",
          },
          {
            title: "Caja sorpresa",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            precio: "$ 49",
          },
          {
            title: "Caja sorpresa",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            precio: "$ 49",
          },
        ]}
      />
      <BotonCatalogo />
      <CarrouselComents
        coments={[
          {
            txt: "Quede muy feliz con los detalles que ofrecen para una fecha especial, son muy amables y es posible personalizarlos y encontrar de todos los presupuestos, super recomendados",
            nombre: "Juanita Sánchez",
            img: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png",
          },
          {
            txt: "Quede muy feliz con los detalles que ofrecen para una fecha especial, son muy amables y es posible personalizarlos y encontrar de todos los presupuestos, super recomendados",
            nombre: "Juanita Sánchez",
            img: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png",
          },
          {
            txt: "Quede muy feliz con los detalles que ofrecen para una fecha especial, son muy amables y es posible personalizarlos y encontrar de todos los presupuestos, super recomendados",
            nombre: "Juanita Sánchez",
            img: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png",
          },
          {
            txt: "Quede muy feliz con los detalles que ofrecen para una fecha especial, son muy amables y es posible personalizarlos y encontrar de todos los presupuestos, super recomendados",
            nombre: "Juanita Sánchez",
            img: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png",
          },
        ]}
      />
      <Cobertura />
      <Footer />
      {/* <ScreenTelefono />
      <FormEnvio />
      <ScreenPago />
      <ScreenNoCobertura />
      <ScreenCobertura /> */}
    </>
  );
}

export default App;
