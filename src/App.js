import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import {Switch, Route } from 'react-router-dom';
import Default from "./components/Default";



function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
            <Route path="/" exact component={ProductList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
