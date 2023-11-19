import { Link } from 'react-router-dom';

import './404.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <span>404</span>
      <span>Not found</span>
      <Link to="/" className="not-found__link">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
