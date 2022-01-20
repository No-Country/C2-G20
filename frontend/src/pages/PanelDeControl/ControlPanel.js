import React from "react";
import Footer from "../../components/Footer";
import logo from "../../images/dashboardgif.gif";
import "animate.css";
import moment from 'moment'
import 'moment/locale/es'
export const ControlPanel = () => {
  return (


    <div className="border container shadow-lg my-4 mr-4 pb-5">
      <div>
        <p className="form-text">{moment().locale('es').format('LLLL')}</p>
      </div>
      <hr className="bg-primary" />
      <h4  className="animate__animated animate__fadeInDown">¡Hola Usuario!</h4>
      <p className="form-text  animate__animated animate__fadeInDown  ">
        Bienvenido al dashboard de <b className="text-primary">cryptocurrency.</b>{" "}
      </p>
      <p className="lead  animate__animated animate__fadeInDown">
        Utiliza el menu de navegación que se encuentra en el lado izquierdo para
        poder previsualizar las estadisticas.
      </p>
      <img
        src={logo}
        className="w-50  animate__animated animate__fadeIn"
        alt="logo dashboard "
      />vvvvv
      <Footer />
    </div>
  );
};
