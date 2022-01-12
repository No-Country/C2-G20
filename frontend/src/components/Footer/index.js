import { Icon } from "@iconify/react";
import Accordion from "./Accordion";
export default function Footer() {
  return (
    <footer className="">
      <div className="footer-accordion">
        <div className="wrapper">
          <Accordion title="¿Quiénes somos?">
            <p className="text-primary">No Country G-20</p>
            <hr />
            <ul>
              <div className="row">
                <div>
                  <li className="list-group-item lead">Sebastián Mosquera</li>
                  <li className="list-group-item lead">Enzo Ramirez </li>
                  <li className="list-group-item lead">Hector Trejo Luna </li>
                  <li className="list-group-item lead">
                    Nayelly Yanqui Ojeda{" "}
                  </li>
                  <li className="list-group-item lead">Marcio Huacacolqui </li>
                  <li className="list-group-item lead">Sergio Grimaldo</li>
                </div>
              </div>
            </ul>
          </Accordion>
          {/* <Accordion title="Servicio a Domicilio">
            <p>Quienes Somos</p>
            <p>Aviso de Privacidad</p>
          </Accordion> */}
          <Accordion title="Aviso de privacidad">
            <div className="footer-copyright">
              <p>G20 Latinoamerica.</p>
              <p>© 2022 | Todos los derechos reservados.</p>
            </div>
          </Accordion>
          <Accordion title="Cerrar Sesión">
            <button className="btn btn-outline-danger w-100">Salir</button>
          </Accordion>
        </div>
      </div>
    </footer>
  );
}
