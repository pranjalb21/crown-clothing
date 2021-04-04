import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/hompage.component';
import ShopPage from './pages/shoppage/shoppage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return  (
    <div>
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route exact path='/shop' component={ ShopPage }/>
        <Route exact path='/hats' component={ HatsPage }/>
        
      </Switch>
    </div>
  );
}

export default App;
