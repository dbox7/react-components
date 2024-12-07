export type callback<T> = (value: T) => void;

export interface IGif {
  analytics: {
    onload: { url: string };
    onclick: { url: string };
    onsent: { url: string };
  };
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: IImages;
  import_datetime: string;
  is_sticker: string;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  user: IUser | null;
  username: string;
}

interface IUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  description: string;
  display_name: string;
  instagram_url: string;
  is_verified: string;
  profile_url: string;
  username: string;
  website_url: string;
}

interface IImages {
  // fixed_height;
  // fixed_height_still;
  // fixed_height_downsampled;
  // fixed_width;
  // fixed_width_still;
  // fixed_width_downsampled;
  // fixed_height_small;
  // fixed_height_small_still;
  // fixed_width_small;
  // fixed_width_small_still;
  downsized: {
    url: string;
    size: number;
    width: string;
    height: string;
  };
  // downsized_still;
  // downsized_large;
  // downsized_medium;
  // downsized_small;
  // original;
  original_still: {
    url: string;
    width: string;
    height: string;
  };
  // looping;
  preview: {
    mp4: string;
    mp4_size: number;
    width: string;
    height: string;
  };
  preview_gif: {
    url: string;
    size: number;
    width: string;
    height: string;
  };
}

export interface IResponse {
  data: IGif[] & IGif;
  meta: {
    msg: string;
    response_id: string;
    status: number;
  };
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}