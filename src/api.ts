const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj';
const BASE_LIMIT = 20;
const BASE_OFFSET = 0;

const addApiKey = (url: string): string => {
  return `${url}&${API_KEY}`;
};

const addLimit = (url: string, limit: number = 0): string => {
  if (limit !== BASE_LIMIT) {
    return `${url}&limit=${limit}`;
  }
  return `${url}&limit=${BASE_LIMIT}`;
};

const addOffset = (url: string, offset: number = 0): string => {
  if (offset !== BASE_OFFSET) {
    return `${url}&offset=${offset}`;
  }
  return `${url}&limit=${BASE_LIMIT}`;
};

export const getGifsByQuery = (
  query: string,
  offset: number = BASE_OFFSET,
  limit: number = BASE_LIMIT
) => {
  let url = `${BASE_URL}/search?q=${query}`;
  url = addLimit(url, limit);
  url = addOffset(url, offset * limit);
  url = addApiKey(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.json());
};

export const getAllGifs = (
  offset: number = BASE_OFFSET,
  limit: number = BASE_LIMIT
) => {
  let url = `${BASE_URL}/trending?`;
  url = addLimit(url, limit);
  url = addOffset(url, offset * limit);
  url = addApiKey(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.json());
};

export const getGifById = (id: string) => {
  let url = `${BASE_URL}/${id}?`;
  url = addApiKey(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.json());
};
