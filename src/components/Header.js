import React from "react";
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background-color: #26C6DA;
  color: #FFFFFF;
  padding: 10px
`;
const TextHeader = styled.h1`
  margin:0%;
  text-align:center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2rem;

`;


const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextHeader>
      {titulo}
      </TextHeader>      
    </ContenedorHeader>
  );
};

export default Header;
