import logo from '../../assets/logo.gif';

import './Header.css';

const Header = () => {
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
            className="header__input"
            placeholder="Enter your query here"
          />
          <button className="button header__button">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
