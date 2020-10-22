import React from 'react';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Banner from './components/Banner';

import './scss/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const banners = [
    { id: 1, img: '1.jpg' },
    { id: 2, img: '2.jpg' },
    { id: 3, img: '3.jpg' },
    { id: 4, img: '4.jpg' },
    { id: 5, img: '5.jpg' },
  ];

  return (
    <div className="App">
      <Header />
      <SubHeader />
      <div className="main-content_wrapper">
        <Banner banners={banners} />
        <div className="bottom-gradient"></div>
      </div>
    </div>
  );
}

export default App;
