import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { FC, useEffect, useState } from 'react';

import './RootLayouts.css';

const RootLayout: FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  useEffect(() => {
    navigate('page/1');
  }, [query]);

  return (
    <>
      <Header setQuery={setQuery} />
      <Outlet context={query} />
    </>
  );
};

export default RootLayout;
