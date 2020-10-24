import React from 'react';
import classNames from 'classnames';

import Category from './Category';

import searchSvg from '../../assets/icons/search.svg';

function Search() {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const findInShop = () => {
    setSearchValue('');
  };

  const onPreventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onPreventDefault} className="search-block">
        <Category />
        <input onChange={handleSearch} value={searchValue} type="text" />
        <button className="button button_search" onClick={findInShop}>
          <img className="search-icon" src={searchSvg} alt="search button" />
        </button>
      </form>
    </>
  );
}

export default Search;
