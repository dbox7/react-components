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
    <div onClick={() => navigate('page/1')}>
      <Header setQuery={setQuery} setLimit={setLimit} />
      <Outlet context={[query, limit]} />
    </div>
  );
};

export default RootLayout;
