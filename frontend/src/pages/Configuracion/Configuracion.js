import React from 'react'
import { Icon } from '@iconify/react'
import './Configuracion.css'
import {Boton} from "../../styledComponents/Formulario"

export const Configuracion = () => {
  return <main className='configuracion-container'>
      <h1>Configuracion de usuario</h1>
      <section>
        <aside className='aside-1'>
          <Boton color='white'>
            <Icon icon="bi:layout-text-window-reverse" width="42" height="42" />
            <p>General</p>
          </Boton>
          <Boton color='white'>
            <Icon icon="mdi:account-edit-outline" width="52" height="52" />
            <p>Profile</p>
          </Boton>
          <Boton color='white'>
            <Icon icon="fluent:alert-urgent-16-regular" width="52" height="52" />
            <p>Alert</p>
          </Boton>
          <Boton color='white'>
            <Icon icon="ri:user-settings-line" width="42" height="42" />
            <p>Account</p>
          </Boton>
          <Boton color='white'>
            <Icon icon="akar-icons:settings-horizontal" width="42" height="42"/>
            <p>Style</p>
          </Boton>
        </aside>
        <aside className='aside-2'>
          En contrucción
        </aside>
      </section>
    </main>
}
