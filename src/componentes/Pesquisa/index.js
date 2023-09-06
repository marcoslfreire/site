import styled from 'styled-components'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        
        `

function Pesquisa(){
        
    return(

        <PesquisaContainer>
           <Titulo>Bem-vindo ao Meu Site </Titulo>
           <Subtitulo>Explorando o Mundo da Tecnologia com Paixão</Subtitulo>
        </PesquisaContainer>
        
    )
}

export default Pesquisa