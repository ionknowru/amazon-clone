import React from 'react';
import axios from 'axios';

import { ProductCard } from '../../components';

function Index() {
    const [products, setProductsState] = React.useState([]);

    React.useEffect(() => {
      axios.get('http://localhost:3001/products').then(({ data }) => {
        setProductsState(data);
      });
    }, []);

    return (
        <div className="products-list">
          <ProductCard products={products} />
        </div>
    )
}

export default Index;
