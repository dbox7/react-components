import { Outlet, useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { getAllGifs } from '../../api';
import { IGif, IResponse } from '../../types';

import List from '../../components/List/List';

const DataLayout: FC = () => {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const props = useParams();

  useEffect(() => {
    getAllGifs(Number(props.page)).then((res: IResponse) => {
      console.log(res);
      setGifs(res.data);
    });
  }, [props.page]);

  return (
    <div className="list__wrap">
      <List queue={gifs} />
      <Outlet />
    </div>
  );
};

export default DataLayout;
