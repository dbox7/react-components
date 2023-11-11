import { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../ContextProvider/Context';

import logo from '../../assets/logo.gif';

import './Header.css';

const Header: FC = () => {
  const context = useContext(MyContext);
  const [inputValue, setInputValue] = useState(context!.query);

  return (
    <header className="header">
      <div className="header__select-wrap">
        <span>Gifs per page:</span>
        <select
          className="header__select"
          onChange={(e) => context?.setLimit(Number(e.target.value))}
          onClick={(e) => e.stopPropagation()}
          defaultValue={25}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <NavLink
        to={'page/1'}
        className="header__logo"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={logo} className="header__logo-img" />
        <span className="header__logo-text">/mirror/</span>
      </NavLink>
      <div className="header__search-wrap">
        <span className="header__desc">Let&#39;s find funny gifs!</span>
        <div className="header__search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="header__input"
            placeholder="Enter your query here"
          />
          <button
            className="button header__button"
            onClick={() => context?.setQuery(inputValue)}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
