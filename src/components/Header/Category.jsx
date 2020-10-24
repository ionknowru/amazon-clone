import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

import arrowSvg from '../../assets/icons/arrow-top.svg';

function Category() {
  const [categoriesData, setCategoriesData] = React.useState([]);
  const [showCategories, setShowCategories] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categoriesRef = React.useRef();

  const toggleCategoriesPopup = () => {
    setShowCategories(!showCategories);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(categoriesRef.current)) {
      setShowCategories(false);
    }
  };

  const onSelectCategory = (index) => {
    setActiveCategory(index);
    setShowCategories(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  React.useEffect(() => {
    axios.get('http://localhost:3001/categories').then(({ data }) => {
      setCategoriesData(data);
    });
  }, []);

  return (
    <div ref={categoriesRef}>
      <button onClick={toggleCategoriesPopup} className="button button_popup">
        All <img src={arrowSvg} alt="arrow down" />
      </button>
      {showCategories && (
        <div className="category-popup">
          {categoriesData &&
            categoriesData.map((category, index) => {
              return (
                <a
                  onClick={() => onSelectCategory(index)}
                  className={classNames('category-popup__item', [
                    activeCategory === index ? 'active' : '',
                  ])}
                  href="#"
                  key={category.id}>
                  {category.title}
                </a>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Category;
