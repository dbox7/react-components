import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FC, useContext, useEffect, useState } from 'react';
import { getAllGifs, getGifsByQuery } from '../../api';
import { IResponse } from '../../types';
import { MyContext } from '../../components/ContextProvider/Context';

import List from '../../components/List/List';
import Header from '../../components/Header/Header';

import loader from '../../assets/loader.gif';

import './RootLayouts.css';

const RootLayout: FC = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  return (
    <div onClick={() => navigate(`/page/${Number(params.page!)}`)}>
      <Header />
      <div className="data__wrap">
        {loading ? <img src={loader} alt="loader" /> : <List />}
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
