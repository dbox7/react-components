import { FC } from 'react';
import { IGif } from '@/utils/types';
import { useRouter } from 'next/router';
import { getURL } from '@/utils/api';

import style from '@/components/Card/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ICard {
  item: IGif;
}

const Card: FC<ICard> = ({ item }) => {
  const router = useRouter();
  const page = router.query.id as string;
  const query = router.query.q as string;
  const limit = router.query.limit as string;
  return (
    <Link
      href={getURL(page, limit, query, item.id)}
      className={style.card}
      onClick={(e) => e.stopPropagation()}
      data-testid="card"
    >
      <Image
        src={item.images.preview_gif.url}
        alt="card"
        className={style.card__img}
        width={30}
        height={30}
        priority={true}
        unoptimized={true}
      />
    </Link>
  );
};

export default Card;
