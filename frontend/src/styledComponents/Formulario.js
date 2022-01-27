import styled, { css } from "styled-components";
import { Icon } from '@iconify/react';

const colores = {
  borde: "#017ADB",
  error: "#bb2929",
  exito: "#1ed12d"
}

const CreateClientComponent = styled.div`
  text-align: initial;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width: 600px) {
    position: absolute;
  }
`;
const MainContainer = styled.main`
  width: 800px;
  margin: auto;
  padding: 40px;
  background: #f0efef;
  border-radius: 10px;
  > div {
    font-weight: 700;
    font-size: clamp(1.2rem, 2.5vw, 2rem); 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px){
    width: 100%;
    padding: 30px;
    padding-bottom: 4rem;
    border-radius: 0px;
  }
`;
const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px){
    grid-template-columns: 1fr ;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${props => props.valido === 'false' && css`
    color: ${colores.error};
  `}
`;
const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;
const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
  }
  ${props => props.valido === 'true' && css`
    border: 3px solid transparent;
  `}
  ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
  `}
`;
const LeyendaError = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  margin-top: 10px;
  color: ${colores.error};
  display: none;

  ${props => props.valido === 'true' && css`
    display: none;
  `}
  ${props => props.valido === 'false' && css`
    display: block;
  `}
`;
const IconoValidacion = styled(Icon)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 100;
  font-size: 26px;
  opacity: 0;


  ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error};
  `}
  ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito};
  `}
`;
const Terminos = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
  @media (max-width: 600px){
    grid-column: span 1;
  }
`;
const BotonCentrado = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 600px){
    grid-column: span 1;
  }
`;
const Boton = styled.button`
  appearance: center;
  border: 2px solid ${colores.borde};
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  height: 38px;
  overflow: hidden;
  outline: none;
  position: relative;
  padding: 9px 20px 8px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  ${props => props.color === 'white' && css`
    color: ${colores.borde};
    background-color: #fff;
  `}
  ${props => props.color === 'blue' && css`
    color: #fff;
    background-color: ${colores.borde};
  `}

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-1px);
  }
  &:disabled {
    pointer-events: none;
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
const MensajeExito = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
  color: ${colores.exito};
`;
const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #F66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  } 
  b {
    margin-left: 10px;
  }
  @media (max-width: 600px){
    height: 90px;
    grid-column: span 1;
  }
`;

export {
  CreateClientComponent,
  MainContainer,
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  Terminos,
  BotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
}