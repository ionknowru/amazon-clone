import React from 'react';
import axios from 'axios';

function Category() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/categories').then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="category">
      {categories &&
        categories.map((category) => {
          return (
            <a className="category__item" href="#">
              {category.title}
            </a>
          );
        })}
    </div>
  );
}

export default Category;
