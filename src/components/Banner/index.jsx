import React from 'react';

import Slider from 'react-slick';

function index({ banners }) {
  const config = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    draggable: false,
    fade: true,
  };

  return (
    <div className="banner_block">
      <Slider {...config}>
        {banners.map((banner) => {
          return (
            <div className="banner_block__item" key={banner.id}>
              <img src={require(`../../assets/images/slider/${banner.img}`)} alt="banner" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default index;
