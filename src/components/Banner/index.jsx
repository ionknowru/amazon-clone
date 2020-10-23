import React from 'react';
import axios from 'axios';

import Slider from 'react-slick';
import config from './slick-config';

function Index() {
  const [banners, setBannersData] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/banners').then(({ data }) => {
      setBannersData(data);
    });
  }, []);

  console.log(banners);

  return (
    <div className="banner-block">
      <Slider {...config}>
        {banners &&
          banners.map((banner) => {
            return (
              <div className="banner-block__item" key={banner.id}>
                <img src={require(`../../assets/images/slider/${banner.image}`)} alt="banner" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Index;
