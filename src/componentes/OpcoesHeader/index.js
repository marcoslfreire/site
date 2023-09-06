import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textOpcoes = ['Sobre', 'Projeto', 'Tecnologia', 'Galeria', 'Contatos'];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textOpcoes.map((texto) => (
      <Opcao ><p>{texto}</p></Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
