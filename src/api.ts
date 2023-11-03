const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj';
const BASE_LIMIT = 20;
// const BASE_OFFSET = 0;

const addApiKey = (url: string): string => {
  return `${url}&${API_KEY}`;
};

const addLimit = (url: string, limit: number = 0): string => {
  if (limit !== BASE_LIMIT) {
    return `${url}&limit=${limit}`;
  }
  return `${url}&limit=${BASE_LIMIT}`;
};

export const getGifsByQuery = (query: string, limit: number = BASE_LIMIT) => {
  let url = `${BASE_URL}/search?q=${query}`;
  url = addLimit(url, limit);
  url = addApiKey(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.json());
};

export const getAllGifs = (limit = BASE_LIMIT) => {
  let url = `${BASE_URL}/trending?`;
  url = addLimit(url, limit);
  url = addApiKey(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.json());
};
