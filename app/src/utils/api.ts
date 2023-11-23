import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGif } from '../../../src/utils/types';
import { HYDRATE } from 'next-redux-wrapper';

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

export const fetchData = createApi({
  reducerPath: 'fetchData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllGifs: builder.query<
      IGif[],
      { query: string; limit: number; offset: number }
    >({
      query: ({ query, limit, offset }) => {
        return urlConstructor(query, limit, offset);
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
