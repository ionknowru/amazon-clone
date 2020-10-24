import React from 'react';
import { Link } from 'react-router-dom';

function Index({ products }) {
  return (
    <React.Fragment>
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <div className="product-card__info">
              <h4>{product.title}</h4>
              <p>
                <span>$</span>
                {product.price}
              </p>
              <p>{product.rating}</p>
            </div>
            <div className="product-card__image">
              <img
                src={require(`../../assets/images/products/${product.image}`)}
                alt="product card image"
              />
            </div>
            <Link to={`/products/${product.id}`}>
              <button className="button button_link">Show More</button>
            </Link>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Index;
