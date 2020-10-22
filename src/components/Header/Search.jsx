import React from 'react';

import arrowSvg from '../../assets/icons/arrow-top.svg';
import searchSvg from '../../assets/icons/search.svg';

function Search() {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const findIn = () => {
    setSearchValue('');
  }

  return (
    <>
      <form className="search">
        <button className="button button_popup">
          All <img src={arrowSvg} alt="arrow down" />
        </button>
        <input onChange={handleSearch} value={searchValue} type="text" />
        <button className="button button_search" onClick={findIn}>
          <img className="search_icon" src={searchSvg} alt="search button" />
        </button>
      </form>
    </>
  );
}

export default Search;
