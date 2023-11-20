import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { useAppDispatch } from '../../store/Hooks';
import { saveLimit, saveQuery } from '../../store/Slice';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.gif';

import './Header.css';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { query, limit } = useSelector((state: RootState) => state.storeSlice);
  const [inputValue, setInputValue] = useState(query);

  const handleClick = () => {
    dispatch(saveQuery(inputValue));
    localStorage.setItem('search', inputValue);
  };

  return (
    <header className="header">
      <div className="header__select-wrap">
        <span>Gifs per page:</span>
        <select
          className="header__select"
          onChange={(e) => dispatch(saveLimit(Number(e.target.value)))}
          onClick={(e) => e.stopPropagation()}
          value={limit}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <NavLink
        to={'/page/1'}
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
          <button className="button header__button" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
