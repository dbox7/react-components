import { useNavigate, useParams } from 'react-router-dom';
import { IGif } from '../../types';
import { FC, MouseEvent, useContext } from 'react';
import { MyContext } from '../ContextProvider/Context';

import Card from '../Card/Card';

import './List.css';

const List: FC = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const props = useParams();

  const changePage = (e: MouseEvent, offset: number) => {
    e.stopPropagation();
    const newPage = Number(props.page!) + offset;
    if (newPage > 1) navigate(`/page/${Number(props.page!) + offset}`);
  };

  return (
    <div className="list__wrap">
      <div className={props.id == null ? 'list' : 'list list_detailed'}>
        {context.gifs.length > 0 ? (
          context!.gifs.map((item: IGif, idx: number) => (
            <Card key={idx} item={item} />
          ))
        ) : (
          <span>No items</span>
        )}
      </div>
      <div className="pagination">
        <div
          onClick={(e) => changePage(e, -1)}
          className="pagination_btn left"
        />
        <span>{props.page}</span>
        <div onClick={(e) => changePage(e, 1)} className="pagination_btn" />
      </div>
    </div>
  );
};

export default List;
