import { useParams, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { getGifById } from '../../api';
import { IGif, IResponse } from '../../types';

import './Details.css';

import loader from '../../assets/loader.gif';

const Details: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [orientation, setOrientation] = useState('quater');
  const [gif, setGif] = useState<IGif>();
  const props = useParams();

  useEffect(() => {
    setLoading(true);
    console.log(props.id);
    getGifById(props.id!).then((res: IResponse) => {
      console.log(res);
      setGif(res.data);
      setLoading(false);
    });
  }, [props.id]);

  useEffect(() => {
    const width = Number(gif?.images.downsized.width);
    const height = Number(gif?.images.downsized.height);
    const ratio = width / height;
    console.log(width, height, ratio, gif);
    if (ratio > 1.25) setOrientation('horizontal');
    else if (ratio < 0.8) setOrientation('vertical');
    else setOrientation('quater');
  }, [gif]);

  return (
    <div className="details" onClick={(e) => e.stopPropagation()}>
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
      )}
    </div>
  );
};

export default Details;
