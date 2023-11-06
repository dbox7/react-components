import { Outlet, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { BASE_LIMIT } from '../../api';

import Header from '../../components/Header/Header';

import './RootLayouts.css';

const RootLayout: FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(BASE_LIMIT);

  useEffect(() => {
    navigate('page/1');
  }, [query, limit]);

  return (
    <>
      <Header setQuery={setQuery} setLimit={setLimit} />
      <Outlet context={[query, limit]} />
    </>
  );
};

export default RootLayout;
