import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalState from './context/globalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';

class App extends Component {
  

  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ProductsPage} exact/>
            <Route path='/cart' component={CartPage} exact/>
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
