import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { BASE_LIMIT } from '../../api';

import Header from '../../components/Header/Header';

import './RootLayouts.css';

const RootLayout: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(BASE_LIMIT);

  useEffect(() => {
    navigate('page/1');
  }, [query, limit]);

  return (
    <div onClick={() => navigate(`page/${params.page}`)}>
      <Header setQuery={setQuery} setLimit={setLimit} />
      <Outlet context={[query, limit]} />
    </div>
  );
};

export default RootLayout;
