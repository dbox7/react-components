import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { getAllGifs, getGifsByQuery } from '../../api';
import { IGif, IResponse } from '../../types';

import List from '../../components/List/List';

import loader from '../../assets/loader.gif';

const DataLayout: FC = () => {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [loading, setLoading] = useState(true);
  const props = useParams();
  const [query, limit] = useOutletContext<string>();

  useEffect(() => {
    setLoading(true);
    query
      ? getGifsByQuery(query, Number(props.page), Number(limit)).then(
          (res: IResponse) => {
            setGifs(res.data);
            setLoading(false);
          }
        )
      : getAllGifs(Number(props.page), Number(limit)).then((res: IResponse) => {
          setGifs(res.data);
          setLoading(false);
        });
  }, [props.page, query, limit]);

  return (
    <div className="data__wrap">
      {loading ? <img src={loader} alt="" /> : <List queue={gifs} />}
      <Outlet />
    </div>
  );
};

export default DataLayout;
