import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

import './Details.css';
import { getGifById } from '../../api';
import { IGif, IResponse } from '../../types';

import loader from '../../assets/loader.gif';

const Details: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [orientation, setOrientation] = useState('quater');
  const [gif, setGifs] = useState<IGif>();
  const props = useParams();

  useEffect(() => {
    console.log('123');
    setLoading(true);
    getGifById(props.id!).then((res: IResponse) => {
      console.log(res);
      setGifs(res.data);
      setLoading(false);
    });
  }, [props.id]);

  useEffect(() => {
    const width = Number(gif?.images.downsized.width);
    const height = Number(gif?.images.downsized.height);
    const ratio = width / height;
    console.log(width, height, ratio);
    if (ratio > 1.2) setOrientation('horizontal');
    else if (ratio < 0.8) setOrientation('vertical');
    else setOrientation('quater');
  }, [gif]);

  return (
    <div className="details">
      {loading ? (
        <img src={loader} alt="" />
      ) : (
        <div className={`details__info-wrap ${orientation}`}>
          <div
            className="details__close"
            onClick={() => navigate(`/page/${Number(props.page!)}`)}
          >
            X
          </div>
          <img
            src={gif?.images.downsized.url}
            className={`details__img ${orientation}`}
          />
          {/* <div className="details__img-wrap">
            
          </div> */}
          <div className="details__text-wrap">
            <div className="details__title">{gif?.title}</div>
            <div className="details__posted">
              <b>posted:</b> {gif?.import_datetime}
            </div>
            <div className="details__source">
              <b>source: </b>
              {gif?.source ? (
                <a href={gif?.source} target="_blank" rel="noreferrer">
                  {gif?.source_tld || 'unknown'}
                </a>
              ) : (
                'unknown'
              )}
            </div>
            {gif?.username && (
              <div className="details__user-wrap">
                <img className="details__user-img" src={gif.user?.avatar_url} />
                <div className="details__user-info">
                  <div className="details__user-name">
                    {gif.user?.display_name}
                  </div>
                  <div className="details__user-desc">
                    {gif.user?.description}
                  </div>
                  <div className="details__user-contacts">
                    <a
                      href={gif.user?.website_url}
                      className="details__user-website"
                    >
                      website
                    </a>
                    <a
                      href={gif.user?.instagram_url}
                      className="details__user-instagram"
                    >
                      instagram
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div className="details__rating">
              MPAA
              <br />
              rating<span>{gif?.rating}</span>
            </div>
          </div>
        </div>
        // <NavLink to={`/page/${props.page}`}>{gif?.id}</NavLink>
      )}
    </div>
  );
};

export default Details;
