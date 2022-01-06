import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <h3>Contáctanos</h3>
        <Icon icon="bx:bx-menu-alt-left" />
        <Icon icon="bx:bx-menu-alt-left" />
        <Icon icon="bx:bx-menu-alt-left" />
      </div>
      <div className="footer-accordion">
        <div className="footer-accordion-item">
          <h4>g20.com</h4>
        </div>
        <div className="footer-accordion-item">
          <h4>Servicio a Domicilio</h4>
        </div>
        <div className="footer-accordion-item">
          <h4>Ayuda</h4>
        </div>
        <div className="footer-accordion-item">
          <h4>Info Corporativa</h4>
        </div>
      </div>
      <div className="footer-copyright">
        <p>G20 Latinoamerica.</p>
        <p>© 2022 | Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
