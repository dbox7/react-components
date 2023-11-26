import { useNavigate, useParams } from 'react-router-dom';
import { IGif } from '../../../../src/utils/types';
import { FC, MouseEvent } from 'react';

import Card from '../Card/Card';

import '@/components/List/List.module.css';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

interface listProps {
  data: IGif[] | undefined;
}

const List: FC<listProps> = ({ data }) => {
  // const navigate = useNavigate();
  // const props = useParams();
  const router = useRouter();
  console.log(router.query);

  const changePage = (e: MouseEvent, offset: number) => {
    e.stopPropagation();
    const newPage = Number(router.query.id!) + offset;
    if (newPage >= 1) redirect(`/page/${newPage}`);
  };

  return (
    <div className="list__wrap">
      <div
        className={router.query.slug == null ? 'list' : 'list list_detailed'}
      >
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
        <span data-testid="pageCounter">{router.query.id}</span>
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
