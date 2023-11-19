import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useGetAllGifsQuery } from '../../api';

import List from '../../components/List/List';
import Header from '../../components/Header/Header';

import loader from '../../assets/loader.gif';

import './RootLayouts.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store';

const RootLayout: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { query, limit } = useSelector((state: RootState) => state.storeSlice);
  const { data, isFetching } = useGetAllGifsQuery({
    query,
    limit,
    offset: Number(params.page),
  });

  useEffect(() => navigate('/page/1'), [query]);

  return (
    <div onClick={() => navigate(`/page/${Number(params.page!)}`)}>
      <Header />
      <div className="data__wrap">
        {isFetching ? <img src={loader} alt="loader" /> : <List data={data} />}
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
