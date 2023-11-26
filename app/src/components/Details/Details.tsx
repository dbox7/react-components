import { FC, useEffect, useState } from 'react';

import style from '@/components/Details/Details.module.css';
import Image from 'next/image';
import { IGif } from '../../../../src/utils/types';

// import loader from '../../assets/loader.gif';

interface detailsProps {
  data: IGif;
}

const Details: FC<detailsProps> = ({ data }) => {
  // const navigate = useNavigate();
  const [orientation, setOrientation] = useState('quater');
  // const props = useParams();
  // const { data, isFetching } = useGetGifByIdQuery(props.id!);

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
      className={style.details}
      onClick={(e) => e.stopPropagation()}
      data-testid="details"
    >
      <div className={`details__info-wrap ${orientation}`}>
        <div
          className={style.details__close}
          onClick={() => navigate(`/page/${Number(props.page!)}`)}
        >
          X
        </div>
        <Image
          src={data?.images.downsized.url}
          className={`${style.details__img} ${orientation}`}
          alt="gif"
          width={30}
          height={30}
          unoptimized={true}
        />
        <div className={style.details__text_wrap}>
          <div className={style.details__title}>{data?.title}</div>
          <div className={style.details__posted}>
            <b>posted:</b> {data?.import_datetime}
          </div>
          <div className={style.details__source}>
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
            <div className={style.details__user_wrap}>
              <Image
                className={style.details__user_img}
                src={data.user!.avatar_url}
                alt="user"
                width={30}
                height={30}
                unoptimized={true}
              />
              <div className={style.details__user_info}>
                <div className={style.details__user_name}>
                  {data.user?.display_name}
                </div>
                <div className={style.details__user_desc}>
                  {data.user?.description}
                </div>
                <div className={style.details__user_contacts}>
                  <a
                    href={data.user?.website_url}
                    className={style.details__user_website}
                  >
                    website
                  </a>
                  <a
                    href={data.user?.instagram_url}
                    className={style.details__user_instagram}
                  >
                    instagram
                  </a>
                </div>
              </div>
            </div>
          )}
          <div className={style.details__rating}>
            MPAA
            <br />
            rating<span>{data?.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
