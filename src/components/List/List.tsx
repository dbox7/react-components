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
    <div className={props.id == null ? 'list' : 'list list_detailed'}>
      <div className="list">
        {queue.map((item: IGif, idx: number) => (
          <Card key={idx} item={item} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => navigate(`/page/${Number(props.page!) - 1}`)}>
          -
        </button>
        <span>{props.page}</span>
        <button onClick={() => navigate(`/page/${Number(props.page!) + 1}`)}>
          +
        </button>
      </div>
    </div>
  );
};

export default List;
