import { IGif } from '@/utils/types';
import { FC, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { getURL } from '@/utils/api';

import Card from '../Card/Card';

import style from '@/components/List/List.module.css';

interface listProps {
  data: IGif[] | undefined;
}

const List: FC<listProps> = ({ data }) => {
  const router = useRouter();

  const changePage = (e: MouseEvent, offset: number) => {
    e.stopPropagation();
    const newPage = Number(router.query.id!) + offset;
    if (newPage >= 1)
      router.push(
        getURL(
          String(newPage),
          router.query.limit as string,
          router.query.q as string
        )
      );
  };

  return (
    <div className={style.list__wrap}>
      <div
        className={
          router.query.slug == null
            ? `${style.list}`
            : `${style.list} ${style.list_detailed}`
        }
      >
        {data !== undefined ? (
          data.map((item: IGif, idx: number) => <Card key={idx} item={item} />)
        ) : (
          <span>No items</span>
        )}
      </div>
      <div className={style.pagination}>
        <div
          onClick={(e) => changePage(e, -1)}
          className={`${style.pagination_btn} ${style.left}`}
          data-testid={style.paginationDecrement}
        />
        <span data-testid="pageCounter">{router.query.id}</span>
        <div
          onClick={(e) => changePage(e, 1)}
          className={style.pagination_btn}
          data-testid="paginationIncrement"
        />
      </div>
    </div>
  );
};

export default List;
