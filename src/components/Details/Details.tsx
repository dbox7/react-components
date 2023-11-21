import { useParams, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { useGetGifByIdQuery } from '../../utils/api';

import './Details.css';

import loader from '../../assets/loader.gif';

const Details: FC = () => {
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState('quater');
  const props = useParams();
  const { data, isFetching } = useGetGifByIdQuery(props.id!);

  useEffect(() => {
    const width = Number(data?.images.downsized.width);
    const height = Number(data?.images.downsized.height);
    const ratio = width / height;
    if (ratio > 1.25) setOrientation('horizontal');
    else if (ratio < 0.8) setOrientation('vertical');
    else setOrientation('quater');
  }, [data]);

  return (
    <div
      className="details"
      onClick={(e) => e.stopPropagation()}
      data-testid="details"
    >
      {isFetching ? (
        <img src={loader} alt="loader" />
      ) : (
        <div className={`details__info-wrap ${orientation}`}>
          <div
            className="details__close"
            onClick={() => navigate(`/page/${Number(props.page!)}`)}
          >
            X
          </div>
          <img
            src={data?.images.downsized.url}
            className={`details__img ${orientation}`}
            alt="gif"
          />
          <div className="details__text-wrap">
            <div className="details__title">{data?.title}</div>
            <div className="details__posted">
              <b>posted:</b> {data?.import_datetime}
            </div>
            <div className="details__source">
              <b>source: </b>
              {data?.source ? (
                <a href={data?.source} target="_blank" rel="noreferrer">
                  {data.source_tld || 'unknown'}
                </a>
              ) : (
                'unknown'
              )}
            </div>
            {data?.username && (
              <div className="details__user-wrap">
                <img
                  className="details__user-img"
                  src={data.user?.avatar_url}
                />
                <div className="details__user-info">
                  <div className="details__user-name">
                    {data.user?.display_name}
                  </div>
                  <div className="details__user-desc">
                    {data.user?.description}
                  </div>
                  <div className="details__user-contacts">
                    <a
                      href={data.user?.website_url}
                      className="details__user-website"
                    >
                      website
                    </a>
                    <a
                      href={data.user?.instagram_url}
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
              rating<span>{data?.rating}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
