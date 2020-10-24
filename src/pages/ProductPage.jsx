import React from 'react';
import axios from 'axios';

import test from '../assets/images/products/1.jpg';

function ProductPage({ match }) {
  const {
    params: { productId },
  } = match;
  const [product, setProductData] = React.useState([]);
  const [isLoading, setStateLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`).then(({ data }) => {
      setProductData(data);
      setStateLoading(false);
    });
  }, [productId]);

  return (
    <div>
      <div className="product-block">
        {!isLoading && (
          <img src={require(`../assets/images/products/${product.image}`)} alt="product image" />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
