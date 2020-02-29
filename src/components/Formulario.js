import React, { useState } from "react";
// import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import {
  getYearsDiference,
  calcularMarca,
  obtenerPlan
} from '../Helper';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`flex: 0 0 100px;`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`margin: 0 1 rem;`;
const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  margin-bottom: 10px;
`;

const Formulario = ({
    guardadrResumen
  }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "basico"
  });
  const [error, setError] = useState(false);
  const { marca, year, plan } = datos;

  const obtenerInformacion = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };
  const cotizarSeguros = e => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    let resultado = 2000;
    const diferencia = getYearsDiference(year);
    console.log(diferencia);
    resultado -= ((diferencia * 3) * resultado) / 100;
    console.log(resultado);
    resultado = calcularMarca(marca) * resultado;
    console.log(resultado);
    resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);
    console.log(resultado);
    guardadrResumen({
      cotizacion: resultado,
      datos: datos
    });
    
  };

  return (
    <form onSubmit={cotizarSeguros}>
      {error ? <Error>Todos los campos son obligatirios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="asiatico">Asiatico</option>
          <option value="europeo">Europeo</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </Select>
      </Campo>
      <Campo>
        <Label>plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />{" "}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />{" "}
        Completo
      </Campo>

      <Boton type="submit"> cotizar </Boton>
    </form>
  );
};

// Formulario.propTypes = {}

export default Formulario;
