import { FC } from 'react';
import { IGif } from '../../utils/types';
import { NavLink } from 'react-router-dom';

import './Card.css';

interface ICard {
  item: IGif;
}

const Card: FC<ICard> = ({ item }) => {
  return (
    <NavLink
      to={`details/${item.id}`}
      className="card"
      onClick={(e) => e.stopPropagation()}
      data-testid="card"
    >
      <img src={item.images.preview_gif.url} alt="card" className="card__img" />
    </NavLink>
  );
};

export default Card;
