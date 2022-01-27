import React, { useState, useRef } from "react"
import "./Cliente.css"
import JASONDATA from "./../../MOCK_DATA.json"
import CreateClient from "./CreateClient"
import {BotonCentrado, Boton} from "../../styledComponents/Formulario"

function RenderClients({ clients }) {
  return (
    <table className="tabla">
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
        {clients.map((val) => {
          return (
            <tr key={val.id}>
              <td data-label='Nombre'>{val.first_name}</td>
              <td data-label='Apellido'>{val.last_name}</td>
              <td data-label='Email'>{val.email}</td>
              <td data-label='Pais'>{val.country}</td>
              <td data-label='Telefono'>{val.phone}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const Cliente = () => {
  const [clients, setClients] = useState(JASONDATA)
  const [searchClient, setSearchClient] = useState("")
  const [searchResults, setSearchResults] = useState([1])
  const [formClient, setFormClient] = useState(false)
  const inputEl = useRef("")

  const getSearchClient = () => {
    searchHandler(inputEl.current.value)
  }
  const searchHandler = (searchClient) => {
    console.log(searchClient)
    setSearchClient(searchClient)
    if (searchClient !== "") {
      const newClientList = clients.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchClient.toLowerCase())
      })
      setSearchResults([...newClientList])
      console.log(searchResults)
    }
  }
  return <>{ formClient ? <CreateClient cerrar={setFormClient}/>
    : <section className="client-container">
      <h1>Clientes</h1>
      <section className="tabla-container">
        <div className="row-1">
          <p></p>
          <BotonCentrado>
            <Boton color="blue" onClick={() => setFormClient(!formClient)}>
              Agregar cliente
            </Boton>
          </BotonCentrado>
        </div>
        <div className="row-2">
          <span>{`Clientes ${clients.length} activos`}</span>
          <div className="input-box">
            <input
              ref={inputEl}
              value={searchClient}
              type="text"
              onChange={getSearchClient}
              placeholder="Buscar cliente..."
            />
          </div>
        </div>
        {searchResults.length > 0 ? (
          <RenderClients clients={searchClient < 1 ? clients : searchResults} />
        ) : (
          <h3>No hay resultados</h3>
        )}
      </section>
    </section>}
  </>
}
