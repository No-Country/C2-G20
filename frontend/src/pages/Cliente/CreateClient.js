import React, { useState } from "react"
import { Icon } from '@iconify/react';
import InputComponente from "../../components/InputComponente/InputComponente";
import {CreateClientComponent, MainContainer, Formulario, BotonCentrado, Boton, MensajeExito, MensajeError} from "../../styledComponents/Formulario"


export default function CreateClient({cerrar}) {
  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [apellido, setApellido] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [telefono, setTelefono] = useState({ campo: '', valido: null });
  const [pais, setPais] = useState({ campo: '', valido: null });
  const [formularioValido, setFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  const onSubmit = e => {
    e.preventDefault()
    if (
      nombre.valido === 'true' &&
      apellido.valido === 'true' &&
      correo.valido === 'true' &&
      telefono.valido === 'true' &&
      pais.valido === 'true' 
    ) {
      // DB
      setFormularioValido(true);
      setNombre({ campo: '', valido: null });
      setApellido({ campo: '', valido: null });
      setCorreo({ campo: '', valido: null });
      setTelefono({ campo: '', valido: null });
      setPais({ campo: '', valido: null });

    } else {
      setFormularioValido(false);
    }
  }
  return <CreateClientComponent>
    <MainContainer>
      <div>
        <span>Crear Cliente</span>
        <Boton color="blue" onClick={()=>cerrar(false)}>
          <Icon icon="fontisto:close-a" color="white" />
        </Boton>
      </div>
      <Formulario action="" onSubmit={onSubmit}>
        <InputComponente
          estado={nombre}
          setEstado={setNombre}
          tipo="text"
          label="Nombre"
          place="John"
          name="usuario"
          leyenda="El nombre solo puede contener letras y espacios." 
          expresion={expresiones.nombre}/>
        <InputComponente
          estado={apellido}
          setEstado={setApellido}
          tipo="text"
          label="Apellido"
          place="Doe"
          name="usuario"
          leyenda="El apellido solo puede contener letras y espacios." 
          expresion={expresiones.nombre}/>
        <InputComponente
          estado={correo}
          setEstado={setCorreo}
          tipo="email"
          label="Correo Electrónico"
          place="john@correo.com"
          name="correo"
          leyenda="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresion={expresiones.correo}/>
        <InputComponente
          estado={telefono}
          setEstado={setTelefono}
          tipo="text"
          label="Teléfono"
          place="098765432"
          name="telefono"
          leyenda="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          expresion={expresiones.telefono}/>
        <InputComponente
          estado={pais}
          setEstado={setPais}
          tipo="text"
          label="País"
          place="Pais"
          name="pais"
          leyenda="El pais solo puede contener letras y espacios."
          expresion={expresiones.nombre}/>
        {formularioValido === false && <MensajeError>
          <p>
            <Icon icon="bi:exclamation-triangle-fill" />
            <b>Error:</b> Por favor rellene el formulario correctamente.
          </p>
        </MensajeError>}
        <BotonCentrado>
          <Boton color={'blue'}type="submit">Crear</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </BotonCentrado>
      </Formulario>
    </MainContainer>
  </CreateClientComponent>
}

