import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './app.css';
import {HomePage, CartPage} from '../pages';

const App = () => {

  return (
    <Switch>
      <Route
        path="/"
        component= {HomePage}
        exact />
      <Route
        path="/cart"
        component= {CartPage}
        />
    </Switch>
    );
};

export default App;