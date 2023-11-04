import { useNavigate, useParams } from 'react-router-dom';
import { IGif } from '../../types';
import { FC } from 'react';

import Card from '../Card/Card';

import './List.css';

interface IList {
  queue: IGif[];
}

const List: FC<IList> = ({ queue }) => {
  const navigate = useNavigate();
  const props = useParams();
  return (
    <div className="list__wrap">
      <div className={props.id == null ? 'list' : 'list list_detailed'}>
        {queue.map((item: IGif, idx: number) => (
          <Card key={idx} item={item} />
        ))}
      </div>
      <div className="pagination">
        <div
          onClick={() => navigate(`/page/${Number(props.page!) - 1}`)}
          className="pagination_btn left"
        />
        <span>{props.page}</span>
        <div
          onClick={() => navigate(`/page/${Number(props.page!) + 1}`)}
          className="pagination_btn"
        />
      </div>
    </div>
  );
};

export default List;
