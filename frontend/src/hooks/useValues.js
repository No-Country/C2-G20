import { useState, useEffect } from "react"

export default function useValues(symbolCrypto = "btc", date = "2021-01-24") {
  // El simbolo del crypto tendria que sacarse del localStorage o el contexto una vez esten.
  const [valuesToday, setValuesToday] = useState(null)
  const [valuesOtherDay, setValuesOtherDay] = useState(null)
  useEffect(() => {
    //Fetch a la ruta para conseguir los valores de hoy de una crypto
    fetch(`http://localhost:5000/cryptos/values/${symbolCrypto}/today`)
      .then((res) => res.json())
      .then((values) => {
        const { eur, mxn, usd, value_max, value_min } = values
        setValuesToday({ eur, mxn, usd, value_max, value_min })
      })
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    //Este trae los mismos valores pero del dia que quieras
    // La fecha va AÑO-MES-DIA, usando el valor del input type "date" te traeria este mismo estilo de formato
    // Si no se usa este estilo de formato la api devolvera un error
    fetch(`http://localhost:5000/cryptos/values/${symbolCrypto}/${date}`)
      .then((res) => res.json())
      .then((values) => {
        const { eur, mxn, usd, value_max, value_min } = values
        setValuesOtherDay({ eur, mxn, usd, value_max, value_min })
      })
      .catch((err) => console.error(err))
  }, [])

  return { valuesToday, valuesOtherDay }
}
