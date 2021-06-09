import React, { Component } from 'react';
import Home from './components/Home';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Where from './components/Where';
import Productos from './components/Productos';
import DetalleInstrumento from './components/DetalleInstrumento';
import Crud from './components/Crud';
import Editar from './components/Editar';
import Crear from './components/Crear';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/where" component={Where}></Route>
          <Route exact path="/products" component={Productos}></Route>
          <Route exact path="/products/:id" component={DetalleInstrumento}></Route>
          <Route exact path="/crud" component={Crud}></Route>
          <Route exact path="/editar/:id" component={Editar}></Route>
          <Route exact path="/crear" component={Crear}></Route>
        </Switch>
    )
  }
}

export default App;
