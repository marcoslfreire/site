
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components'
import Sobre from './componentes/MenuSobre'

const AppContainer =  styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`


function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <Sobre></Sobre>
    </AppContainer>
    
  );
}

export default App;
