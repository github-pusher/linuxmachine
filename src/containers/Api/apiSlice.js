import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'REACT_APP_TELEGRAM_BOT_API',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/getUpdates',
    }),
  }),
})

export const { useGetPostsQuery } = apiSlice;
