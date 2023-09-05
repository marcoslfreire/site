import logo from '../../imagens/logo.svg'

import styled  from 'styled-components'

const LogoContainer = styled.div` 
    display: flex;
    font-size: 30px;

`

const LogoImagen = styled.img`
    margin-right: 30px;

`
function Logo(){
    return(
        <LogoContainer>
        <LogoImagen  src = {logo} alt='logo' />
            <p><strong>Programar</strong> é Arte</p>
        </LogoContainer>
    )
}

export default Logo