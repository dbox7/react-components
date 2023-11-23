import { FC } from 'react';
// import { RootState } from '../../../../src/store/Store';
// import { useAppDispatch, useAppSelector } from '../../../../src/store/utils/Hooks';
// import { saveLimit, saveQuery } from '../../../../src/store/utils/Slice';

import logo from '../../../public/logo.gif';

import '@/components/Header/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__select-wrap">
        <span>Gifs per page:</span>
        <select
          className="header__select"
          // onChange={(e) => dispatch(saveLimit(Number(e.target.value)))}
          onClick={(e) => e.stopPropagation()}
          value={25}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <Link
        href={'/page/1'}
        className="header__logo"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={logo} className="header__logo-img" alt="logo" />
        <span className="header__logo-text">/mirror/</span>
      </Link>
      <div className="header__search-wrap">
        <span className="header__desc">Let&#39;s find funny gifs!</span>
        <div className="header__search">
          {/* <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="header__input"
            placeholder="Enter your query here"
          />
          <button className="button header__button" onClick={handleClick}>
            Search
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
