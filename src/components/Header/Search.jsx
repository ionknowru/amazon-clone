import React from 'react';
import Category from './Category';

import arrowSvg from '../../assets/icons/arrow-top.svg';
import searchSvg from '../../assets/icons/search.svg';

function Search() {
  const [searchValue, setSearchValue] = React.useState('');
  const [showCategories, setShowCategories] = React.useState(false);
  const categoriesRef = React.useRef();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const findIn = () => {
    setSearchValue('');
  };

  const toggleCategoriesPopup = () => {
    setShowCategories(!showCategories);
  };

  const onPreventDefault = (e) => {
    e.preventDefault();
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(categoriesRef.current)) {
      setShowCategories(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      <form ref={categoriesRef} onSubmit={onPreventDefault} className="search-block">
        <button onClick={toggleCategoriesPopup} className="button button_popup">
          All <img src={arrowSvg} alt="arrow down" />
        </button>
        {showCategories && <Category />}
        <input onChange={handleSearch} value={searchValue} type="text" />
        <button className="button button_search" onClick={findIn}>
          <img className="search-icon" src={searchSvg} alt="search button" />
        </button>
      </form>
    </>
  );
}

export default Search;
