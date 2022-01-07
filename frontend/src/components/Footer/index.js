import { Icon } from "@iconify/react"
import { useState } from "react"
import './Footer.css'

function Links ({link}) {
  return <a href="/#"><p style={{padding: "10px 5%"}}>{link}</p></a>
}

function Details ({detail, open, setOpen, children}) {
  return <>
    <div className="detail">
      <div className="detail-title" onClick={() => setOpen(detail)}>
        <span>{detail}</span>
        <Icon icon={`bx:bxs-${detail === open ? 'up' : 'down'}-arrow`} color="#017adb" width="20" height="20" />
      </div>
      {detail === open && children}
    </div>
  </>
}

export default function Footer () {
  const [open, setOpen] = useState(null)
  const toogle = (isOpen) => (open === isOpen) ? setOpen(null) : setOpen(isOpen)

  return (
    <footer>
      <div className="contactos">
        <p>Contáctenos</p>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><Icon icon="simple-icons:twitter" color="white" width="20" height="20"/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" ><Icon icon="simple-icons:facebook" color="white" width="20" height="20"/></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer noopener"><Icon icon="simple-icons:youtube" color="white" width="20" height="20"/></a>
      </div>
      <div className="footer-links">
        <Details detail={'Grupo.com.mx'} open={open} setOpen={toogle}>
          <Links link={"Quienes Somos"} />
          <Links link={"Aviso de Privacidad"} />
        </Details>
        <Details detail={'Servicio a Domicilio'} open={open} setOpen={toogle}>
          <Links link={"Correo"}/>
        </Details>
        <Details detail={'Ayuda'} open={open} setOpen={toogle}>
          <Links link={"Soporte"}/>
        </Details>
        <Details detail={'Info Corporativa'} open={open} setOpen={toogle}>
          <Links link={"Direccion 1"} />
          <Links link={"Direccion 2"} />
          <Links link={"Direccion 3"} />
          <Links link={"Direccion 4"} />
        </Details>
      </div>
      <div className="copyright">
        <p>Grupo20 Mx y Centroamérica</p>
        <p className="footer-bold">©2022 | Todos los derechos reservados</p>
      </div>
    </footer>
  )
}