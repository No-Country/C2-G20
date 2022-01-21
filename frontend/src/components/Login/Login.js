import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/login.css";
import Footer from "../Footer";
export const Login = () => {
  return (
    <>
      <div className="container bg-light">
        <form>
          <div className="box text-dark shadow-lg border my-4">
            <h1 className="my-3">Inicia Sesión</h1>
            <i class="fas fa-users fa-3x my-2 text-primary"></i>
            <h5 className="mb-4 my-4">Bienvenido</h5>
            <label className="form-label">Email<label className="text-danger">*</label></label>
            <div className="mb-4 d-flex justify-content-center">
              <input
                type="email"
<<<<<<< HEAD
                className="form-control w-50 inputColor"
=======
                className="form-control w-75 inputColor"
>>>>>>> enzo
                placeholder="example@example.com"
                required
              />
            </div>
            <label className="form-label">Contraseña<label className="text-danger">*</label></label>
            <div className="mb-4 d-flex justify-content-center">
              <input
                type="password"
<<<<<<< HEAD
                className="form-control w-50 inputColor"
=======
                className="form-control w-75 inputColor"
>>>>>>> enzo
                placeholder="******"
                required
              />
            </div>
        <button className="botonIngresar my-4">Ingresar <i class="fas fa-sign-in-alt"></i></button>
        <p className="form-text"><i class="fas fa-shield-alt mx-2"></i>Datos seguros y protegidos</p>
          </div>
        </form>
      </div>

    </>
  );
};
