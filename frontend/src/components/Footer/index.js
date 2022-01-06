import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import './Footer.css'

function Links ({link}) {
  return <a href="/#"><p style={{padding: "10px 5%"}}>{link}</p></a>
}

function Details ({detail, links}) {
  const [clicked, setClicked] = useState(false)
  useEffect(() => {}, [clicked])

  return <>
    <div className="detail">
      <div className="detail-title" onClick={() => setClicked(!clicked)}>
        <span>{detail}</span>
        <Icon icon={`bx:bxs-${clicked ? 'up' : 'down'}-arrow`} color="#017adb" width="20" height="20" />
      </div>
      {clicked && links}
    </div>
  </>
}

export default function Footer () {
  return (
    <div id="footer">
      <div className="contactos">
        <p>Contáctenos</p>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><Icon icon="simple-icons:twitter" color="white" width="20" height="20"/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" ><Icon icon="simple-icons:facebook" color="white" width="20" height="20"/></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer noopener"><Icon icon="simple-icons:youtube" color="white" width="20" height="20"/></a>
      </div>
      <div className="footer-links">
        <Details detail={'Grupo.com.mx'} 
          links={<>
          <Links link={"Quienes Somos"} />
          <Links link={"Aviso de Privacidad"} /></>} />
        <Details detail={'Servicio a Domicilio'}
          links={<Links link={"Correo"}/>} />
        <Details detail={'Ayuda'} 
          links={<Links link={"Soporte"}/>} />
        <Details detail={'Info Corporativa'} 
          links={<>
            <Links link={"Direccion 1"} />
            <Links link={"Direccion 2"} />
            <Links link={"Direccion 3"} />
            <Links link={"Direccion 4"} /></>} />
      </div>
      <div className="copyright">
        <p>Grupo20 Mx y Centroamérica</p>
        <p className="footer-bold">©2022 | Todos los derechos reservados</p>
      </div>
    </div>
  )
}