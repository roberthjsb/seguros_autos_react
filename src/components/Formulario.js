import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;

const Formulario = memo(props => {
  return (
    <form>
      <Campo>
        <Label>Marca</Label>
        <select>
          <option value=''>-- Seleccione --</option>
          <option value='americano'>Americano</option>
          <option value='asiatico'>Asiatico</option>
          <option value='europeo'>Europeo</option>
        </select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <select>
          <option value=''>-- Seleccione --</option>
          <option value='americano'>2021</option>
          <option value='americano'>2020</option>
          <option value='americano'>2019</option>
          <option value='americano'>2018</option>
          <option value='americano'>2017</option>
          <option value='americano'>2016</option>
        </select>
      </Campo>
      < Campo >
        <Label>plan</Label>
        <input type='radio' name='plan' value='Básico' />
        <input type='radio' name='plan' value='Completo' />
      </Campo>

      <button type='button'>cotizar</button>
    </form>
  )
})

// Formulario.propTypes = {}

export default Formulario
