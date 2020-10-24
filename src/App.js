import React from 'react';
import { HomePage, ProductPage } from './pages';
import { Header, NavBar } from './components';

import { Route } from 'react-router-dom';

import './scss/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className="main-content-wrapper">
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:productId" component={ProductPage} />
      </div>
      
    </div>
  );
}

export default App;
