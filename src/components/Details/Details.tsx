import { useParams, NavLink } from 'react-router-dom';
import { FC } from 'react';

import './Details.css';

const Details: FC = () => {
  const props = useParams();

  return (
    <div className="details">
      {props.page}
      <NavLink to={`/page/${props.page}`}>HERE</NavLink>
    </div>
  );
};

export default Details;
