import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGif } from './types';

const BASE_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'api_key=bCTu4TIIVb1WkVvZTa6KsDy381RPl2Xj';

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
          return `/search?q=${query}&${API_KEY}`;
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
