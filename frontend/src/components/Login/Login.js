import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/login.css";
import Swal from "sweetalert2";
import clientAxios from "../../config/axios";

export const Login = () => {
  const [credentials, setCredentials] = useState({});

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await clientAxios.post("/login", credentials);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Inicio de sesión exitoso",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  const readInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container bg-light">
        <form onSubmit={login}>
          <div className="box text-dark shadow-lg border my-4">
            <h1 className="my-3">Inicia Sesión</h1>
            <i class="fas fa-users fa-3x my-2 text-primary"></i>
            <h5 className="mb-4 my-4">Bienvenido</h5>
            <label className="form-label">
              Email<label className="text-danger">*</label>
            </label>
            <div className="mb-4 d-flex justify-content-center">
              <input
                type="email"
                name="email"
                className="form-control w-75 inputColor"
                placeholder="example@example.com"
                required
                onChange={readInput}
              />
            </div>
            <label className="form-label">
              Contraseña<label className="text-danger">*</label>
            </label>
            <div className="mb-4 d-flex justify-content-center">
              <input
                type="password"
                name="password"
                className="form-control w-75 inputColor"
                placeholder="******"
                required
                onChange={readInput}
              />
            </div>

            <button type="submit" className="botonIngresar my-4">
              Ingresar <i class="fas fa-sign-in-alt"></i>
            </button>
            <p className="form-text">
              <i class="fas fa-shield-alt mx-2"></i>Datos seguros y protegidos
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
