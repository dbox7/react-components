import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { getURL } from '@/utils/api';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo.gif';

import style from '@/components/Header/Header.module.css';

const Header: FC = () => {
  const [value, setValue] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('search') || ''
      : ''
  );
  const [limit, setLimit] = useState(25);
  const router = useRouter();

  const handleClick = () => {
    localStorage.setItem('search', value);
    router.push(getURL(router.query.id as string, String(limit), value));
  };

  return (
    <div className={style.header}>
      <div className={style.header__select_wrap}>
        <span>Gifs per page:</span>
        <select
          className={style.header__select}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            router.push(
              getURL(
                router.query.id as string,
                e.target.value,
                router.query.q as string
              )
            );
          }}
          onClick={(e) => e.stopPropagation()}
          value={limit}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <Link
        href={getURL('1', String(limit), value)}
        className={style.header__logo}
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={logo} className={style.header__logo_img} alt="logo" priority={true}/>
        <span className={style.header__logo_text}>/mirror/</span>
      </Link>
      <div className={style.header__search_wrap}>
        <span className={style.header__desc}>Let&#39;s find funny gifs!</span>
        <div className={style.header__search}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="header__input"
            placeholder="Enter your query here"
          />
          <button className="button header__button" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
