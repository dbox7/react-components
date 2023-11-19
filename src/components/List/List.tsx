import { useNavigate, useParams } from 'react-router-dom';
import { IGif } from '../../utils/types';
import { FC, MouseEvent } from 'react';

import Card from '../Card/Card';

import './List.css';

interface listProps {
  data: IGif[] | undefined;
}

const List: FC<listProps> = ({ data }) => {
  const navigate = useNavigate();
  const props = useParams();

  const changePage = (e: MouseEvent, offset: number) => {
    e.stopPropagation();
    const newPage = Number(props.page!) + offset;
    if (newPage >= 1) navigate(`/page/${newPage}`);
  };

  return (
    <div className="list__wrap">
      <div className={props.id == null ? 'list' : 'list list_detailed'}>
        {data !== undefined ? (
          data.map((item: IGif, idx: number) => <Card key={idx} item={item} />)
        ) : (
          <span>No items</span>
        )}
      </div>
      <div className="pagination">
        <div
          onClick={(e) => changePage(e, -1)}
          className="pagination_btn left"
          data-testid="paginationDecrement"
        />
        <span data-testid="pageCounter">{props.page}</span>
        <div
          onClick={(e) => changePage(e, 1)}
          className="pagination_btn"
          data-testid="paginationIncrement"
        />
      </div>
    </div>
  );
};

export default List;
