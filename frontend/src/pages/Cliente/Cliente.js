import React, { useState, useRef } from 'react'
import { Icon } from '@iconify/react';
import './Cliente.css'
import JASONDATA from './../../MOCK_DATA.json'

function RenderClients({ clients }) {
  return <table className='tabla'>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Pais</th>
        <th>Telefono</th>
      </tr>
    </thead>
    <tbody>
      {clients.map(val => {
        return <tr key={val.id}>
          <td>{val.first_name}</td>
          <td>{val.last_name}</td>
          <td>{val.email}</td>
          <td>{val.country}</td>
          <td>{val.phone}</td>
        </tr>
      })}
    </tbody>
  </table>
}

export const Cliente = () => {
  const [clients, setClients] = useState(JASONDATA)
  const [searchClient, setSearchClient] = useState('')
  const [searchResults, setSearchResults] = useState([1])
  const inputEl = useRef('')
  console.log('mount')

  const getSearchClient = () => {
    searchHandler(inputEl.current.value)
  }
  const searchHandler = (searchClient) => {
    console.log(searchClient)
    setSearchClient(searchClient)
    if (searchClient !== "") {
      const newClientList = clients.filter((contact)=>{
        return Object.values(contact)
          .join(' ')
          .toLowerCase()
          .includes(searchClient.toLowerCase())
      })
      setSearchResults([...newClientList])
      console.log(searchResults)
    }
  }
  return <section className='client-container'>
    <h1>Clientes</h1>
    <section className='tabla-container'>
      <div className='row-1'>
        <p></p><button className='button-29' onClick={()=>alert("EN PROGRESO...")}>Agregar cliente</button>
      </div>
      <div className='row-2'>
        <span>{`Clientes ${clients.length} activos`}</span>
        <div className="input-box">
          <input
          ref={inputEl}
          value={searchClient}
          type="text"
          onChange={getSearchClient}
          placeholder="Buscar cliente..."
          />
          <Icon icon="bx:bx-search" width="28" height="28"/>
        </div>

      </div>
          {searchResults.length > 0 ?
          <RenderClients clients={searchClient < 1 ? clients : searchResults}/>
          : <h3>No hay resultados</h3>}
    </section>
  </section>
}
