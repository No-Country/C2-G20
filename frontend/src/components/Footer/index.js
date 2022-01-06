import { Icon } from "@iconify/react";
import Accordion from "./Accordion";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <h3>Contáctanos</h3>
        <Icon icon="akar-icons:twitter-fill" className="iconf" />
        <Icon icon="akar-icons:facebook-fill" className="iconf" />
        <Icon icon="akar-icons:youtube-fill" className="iconf" />
      </div>
      <div className="footer-accordion">
        <div className="wrapper">
            <Accordion title="G20.com">
                <p>Quienes Somos</p>
                <p>Aviso de Privacidad</p>
            </Accordion>
            <Accordion title="Servicio a Domicilio">
                <p>Quienes Somos</p>
                <p>Aviso de Privacidad</p>
            </Accordion>
            <Accordion title="Ayuda">
                <p>Quienes Somos</p>
                <p>Aviso de Privacidad</p>
            </Accordion>
            <Accordion title="Info Corporativa">
                <p>Quienes Somos</p>
                <p>Aviso de Privacidad</p>
            </Accordion>
        </div>
      </div>
      <div className="footer-copyright">
        <p>G20 Latinoamerica.</p>
        <p>© 2022 | Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
