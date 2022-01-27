import {Label, GrupoInput, Input, LeyendaError, IconoValidacion} from "../../styledComponents/Formulario"

export default function InputComponente({estado, setEstado, tipo, label, place, name, leyenda, expresion, funcion}) {
  const onChange = (e) => {
    setEstado({...estado, campo: e.target.value})
  }
  const validacion = () => {
    if (expresion) {
      if(expresion.test(estado.campo)){
        setEstado({...estado, valido: 'true'})
      } else {
        setEstado({...estado, valido: 'false'})
      }
    }
    if (funcion) {
      funcion();
    }
  }
  return <div>
    <Label htmlFor={name} valido={estado.valido}>{label}</Label>
    <GrupoInput>
      <Input type={tipo} placeholder={place} id={name} value={estado.campo } onChange={onChange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido}/>
      <IconoValidacion icon={estado.valido === 'true' ? 'fa-solid:check-circle' : 'fa-solid:times-circle'} valido={estado.valido}/>
    </GrupoInput>
    <LeyendaError valido={estado.valido}>{leyenda}</LeyendaError>
  </div>
}