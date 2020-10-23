import React from 'react';

import Cart from './Cart';
import Search from './Search';

import logoPng from '../../assets/images/logo.png';

function Index() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-left">
          <img className="logo" src={logoPng} alt="amazon logo" />
        </div>

        <Search />

        <div className="header__inner-right">
          <button className="button button_link">
            ENG
            <i>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
            </i>
          </button>

          <div className="login-block">
            <button className="button button_link">
              <p>
                Hello, Sign in
                <br />
                <span>Account & Lists</span>
              </p>
            </button>
          </div>

          <div className="returns-block">
            <button className="button button_link">
              <p>
                Returns
                <br />
                <span>& Orders</span>
              </p>
            </button>
          </div>

          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Index;
