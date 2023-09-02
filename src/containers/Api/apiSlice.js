import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.telegram.org/bot5818008842:AAGzyS5Vzq6osii2e2i2IHCywChBMxqAt6k/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/getUpdates',
    }),
  }),
})

export const { useGetPostsQuery } = apiSlice;
