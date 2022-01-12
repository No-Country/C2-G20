import React from "react";
import Footer from "../../components/Footer";
import logo from "../../images/dashboardgif.gif";
import "animate.css";
export const ControlPanel = () => {
  return (
    <div className="border container shadow-lg my-4 mr-4 pb-5">
      <h1 className="my-2  text-primary">Panel de control</h1>
      <hr className="bg-primary" />
      <h4  className="animate__animated animate__fadeInDown">¡Hola Usuario!</h4>
      <p className="form-text  animate__animated animate__fadeInDown">
        Bienvenido al dashboard de <b>cryptocurrency.</b>{" "}
      </p>
      <p className="lead  animate__animated animate__fadeInDown">
        Utiliza el menu de navegación que se encuentra en el lado izquierdo para
        poder previsualizar las estadisticas.
      </p>
      <img
        src={logo}
        className="w-50  animate__animated animate__fadeIn"
        alt="logo dashboard "
      />
      <Footer />
    </div>
  );
};
