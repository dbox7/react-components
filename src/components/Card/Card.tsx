import { NavLink } from 'react-router-dom';

import './Card.css';

const Card = ({ item }) => {
  return (
    <NavLink to={item.id}>
      <img src={item.images.preview_gif.url} alt="" className="Card" />
    </NavLink>
  );
};

export default Card;
