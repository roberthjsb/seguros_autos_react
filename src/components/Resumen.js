import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import {
    PrimeraMayuscula
} from '../Helper';
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos
  if (marca === '' || year === '' || plan === '') return null
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización </h2>{' '}
      <ul>
        <li> Marca: {PrimeraMayuscula(marca)} </li>
        < li > Plan: {
                PrimeraMayuscula(plan)
                } < /li>
        <li> Año: {year} </li>
      </ul>
    </ContenedorResumen>
  )
}

Resumen.propTypes = {}

export default Resumen
