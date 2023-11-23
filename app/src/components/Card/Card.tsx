import { FC } from 'react';
import { IGif } from '../../../../src/utils/types';

import '@/components/Card/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ICard {
  item: IGif;
}

const Card: FC<ICard> = ({ item }) => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <Link
      href={`details/${item.id}`}
      className="card"
      onClick={(e) => e.stopPropagation()}
      data-testid="card"
    >
      <Image
        src={item.images.preview_gif.url}
        alt="card"
        className="card__img"
        width={30}
        height={30}
        unoptimized={true}
      />
    </Link>
  );
};

export default Card;
