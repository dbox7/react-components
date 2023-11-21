import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGif, IResponse } from '../../utils/types';

const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj';

const urlConstructor = (query: string, limit: number, offset: number) => {
  let url = BASE_URL;
  if (query) url += `/search?q=${query}&`;
  else url += '/trending?';
  url += `limit=${limit}`;
  if (offset > 0) url += `&offset=${(offset - 1) * limit}`;
  url += `&${API_KEY}`;
  return url;
};

export const fetchData = createApi({
  reducerPath: 'fetchingData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllGifs: builder.query<
      IGif[],
      { query: string; limit: number; offset: number }
    >({
      query: ({ query, limit, offset }) => urlConstructor(query, limit, offset),
      transformResponse: (response: IResponse) => response.data,
    }),
    getGifById: builder.query<IGif, string>({
      query: (id) => `${BASE_URL}/${id}?${API_KEY}`,
      transformResponse: (response: IResponse) => response.data,
    }),
  }),
});

export const { useGetAllGifsQuery, useGetGifByIdQuery } = fetchData;
