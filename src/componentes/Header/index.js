
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../Icone'

import styled from 'styled-components'

const HeaderComponents = styled.header`

    background-color: rgb(248, 244, 244);
    display: flex;
    justify-content: center;

`

function Header(){
    return (

        <HeaderComponents>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderComponents>
    )
}
export default Header