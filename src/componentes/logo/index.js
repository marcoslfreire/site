import logo from '../../imagens/logopersonalisada.png'
import styled  from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 40px;
    width: 400px; /* Largura desejada para o ícone */
    height: 30px;

`

const LogoImagen = styled.img`
display: flex;
align-items: center; /* Centralizar verticalmente o conteúdo */
font-size: 10px;
width: 200px;
height: 30px; /* Aumentei a altura para criar espaço abaixo do ícone */
padding: 70px; /* Adicionei um preenchimento para criar espaço em torno do ícone */
background-color: rgba(255, 255, 255, 0.0); /* Adicionei uma cor de fundo com opacidade */
border-radius: 20px; /* Bordas arredondadas */
margin-left: -80px;
    
`
function Logo(){
    return(
        
        <LogoContainer>
        <LogoImagen  src = {logo} alt='logo' />

        </LogoContainer>
        
    )
}

export default Logo