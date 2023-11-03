import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const props = useParams();

  return <div className="details">{props.id}</div>;
};

export default Details;
