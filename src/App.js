import React from 'react';
import { Header, NavBar, Banner, ProductsList } from './components';

import './scss/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TODO: Refactor styles 

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className="main-content-wrapper">
        <Banner />
        <div className="bottom-gradient"></div>
        <ProductsList />
      </div>
      
    </div>
  );
}

export default App;
