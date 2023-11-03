import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import { useEffect, useState } from 'react';
import { getAllGifs } from '../api';

import './RootLayouts.css';

const RootLayout = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getAllGifs().then((res) => {
      console.log(res.data);
      setGifs(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="list__wrap">
        <List queue={gifs} />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
