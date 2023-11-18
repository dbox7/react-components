import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FC, useContext, useEffect, useState } from 'react';
import { getAllGifs, getGifsByQuery } from '../../utils/api';
import { IResponse } from '../../utils/types';
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

  useEffect(() => {
    setLoading(true);
    context.query
      ? getGifsByQuery(
          context.query,
          Number(params.page),
          Number(context!.limit)
        ).then((res: IResponse) => {
          context.setGifs(res.data);
          setLoading(false);
        })
      : getAllGifs(Number(params.page), Number(context.limit)).then(
          (res: IResponse) => {
            context.setGifs(res.data);
            setLoading(false);
          }
        );
  }, [params.page, context.query, context.limit]);

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
