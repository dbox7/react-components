import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { FC, useEffect } from 'react';

import './RootLayouts.css';

const RootLayout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('page/1');
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
