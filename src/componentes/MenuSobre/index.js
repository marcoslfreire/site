import React from 'react';
import styled from 'styled-components';

// Estilos para o container principal
const SobreContainer = styled.div`
  text-align: center;
  padding: 150px;
`;

// Estilos para o texto principal
const SobreText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333; /* Cor do texto */
`;

// Estilos para palavras em inglês
const PalavraEmIngles = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

function Sobre() {
  return (
    <SobreContainer>
      <h1>Página Sobre</h1>
      <SobreText>
        Minha jornada se destaca pela diversidade e amplitude de experiências. Tenho a honra de participar de projetos em diversos segmentos, incluindo telecomunicações, setor bancário, desenvolvimento mobile e web. Logo no primeiro ano, assumi um papel ativo como Desenvolvedor Mobile, contribuindo para soluções em plataformas <PalavraEmIngles>Android</PalavraEmIngles> por meio das linguagens <PalavraEmIngles>Java</PalavraEmIngles> e <PalavraEmIngles>Kotlin</PalavraEmIngles>. Essa experiência enriqueceu meu conhecimento sobre o desenvolvimento de aplicativos.
      </SobreText>
      {/* Continue com o restante do texto */}
    </SobreContainer>
  );
}

export default Sobre;
