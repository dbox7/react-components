const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj';

const urlConstructor = (
  query: string,
  limit: number,
  offset: number
): string => {
  let res = BASE_URL;
  if (query) res += `/search?q=${query}&`;
  else res += `/trending?`;
  res += `limit=${limit}&${API_KEY}`;
  if (offset > 0) res += `&offset=${(offset - 1) * limit}`;
  return res;
};

export const fetchAllGifs = async (
  query: string,
  limit: number,
  offset: number
) => {
  const url = urlConstructor(query, limit, offset);
  return await (await fetch(url)).json();
};

export const getURL = (
  pageId: string,
  limit: string,
  query: string,
  gifId?: string
) => {
  let url = gifId ? `/page/${pageId}/details/${gifId}` : `/page/${pageId}`;
  if (limit) url += `?limit=${limit}`;
  else url += `?limit=25`;
  if (query) url += `&q=${query}`;
  return url;
};
