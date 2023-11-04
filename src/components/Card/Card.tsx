import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { IGif } from '../../types';

import './Card.css';

interface ICard {
  item: IGif;
}

const Card: FC<ICard> = ({ item }) => {
  return (
    <NavLink to={`details/${item.id}`} className="card">
      <img src={item.images.preview_gif.url} alt="" className="card__img" />
      {/* <video src={item.images.preview.mp4} autoPlay={true} className="card" /> */}
    </NavLink>
  );
};

export default Card;
