import { FC, useState } from 'react';
import logo from '../../assets/logo.gif';

import './Header.css';

interface IHeader {
  setQuery: (value: string) => void;
}

const Header: FC<IHeader> = ({ setQuery }) => {
  const [value, setValue] = useState('');

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} className="header__logo-img" />
        <span className="header__logo-text">/mirror/</span>
      </div>
      <div className="header__search-wrap">
        <span className="header_desc">Let&#39;s find funny gifs!</span>
        <div className="header__search">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="header__input"
            placeholder="Enter your query here"
          />
          <button
            className="button header__button"
            onClick={() => setQuery(value)}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
