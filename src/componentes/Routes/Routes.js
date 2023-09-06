// Routes.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sobre from './Sobre'; // Importe os componentes das páginas
import Projeto from './Projeto';
import Tecnologia from './Tecnologia';
import Galeria from './Galeria';
import Contatos from './Contatos';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/projeto">
          <Projeto />
        </Route>
        <Route path="/tecnologia">
          <Tecnologia />
        </Route>
        <Route path="/galeria">
          <Galeria />
        </Route>
        <Route path="/contatos">
          <Contatos />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
