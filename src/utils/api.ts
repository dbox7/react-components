import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGif } from './types';

const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj';
export const BASE_LIMIT = 25;
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
  return `${url}&offset=${BASE_OFFSET}`;
};

export const getGifsByQuery = (
  query: string,
  offset: number = BASE_OFFSET,
  limit: number = BASE_LIMIT
) => {
  let url = `${BASE_URL}/search?q=${query}`;
  url = addLimit(url, limit);
  url = addOffset(url, (offset - 1) * limit);
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
  url = addOffset(url, (offset - 1) * limit);
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

export const fetchData = createApi({
  reducerPath: 'fetchData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllGifs: builder.query<
      IGif[],
      { query: string; limit: number; offset: number }
    >({
      query: ({ query, limit, offset }) => {
        if (!query) {
          if (offset > 0) {
            return `/trending?limit=${limit}&offset=${
              (offset - 1) * limit
            }&${API_KEY}`;
          } else {
            return `/trending?limit=${limit}&${API_KEY}`;
          }
        } else {
          return `/search?q=${query}`;
        }
      },
      transformResponse: (response: { data: IGif[] }) => response.data,
    }),
    getGifById: builder.query<IGif, string>({
      query: (id) => {
        return `${BASE_URL}/${id}?${API_KEY}`;
      },
      transformResponse: (response: { data: IGif }) => response.data,
    }),
  }),
});

export const { useGetAllGifsQuery, useGetGifByIdQuery } = fetchData;
