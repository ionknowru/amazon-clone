import React from 'react';

import testImg from '../../assets/images/products/1.jpg';

function Index({ products }) {
  return (
    <React.Fragment>
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <div className="product-card__info">
                <h4>{product.title}</h4>
              <p>
                <span>$</span>{product.price}
              </p>
        <p>{product.rating}</p>
            </div>
            <div className="product-card__image">
              <img src={require(`../../assets/images/products/${product.image}`)} alt="product card image" />
            </div>
            <button className="button button_link">Show More</button>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Index;
