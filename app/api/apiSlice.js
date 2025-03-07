import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bfhl-api-403j.onrender.com' }),
    endpoints: (builder) => ({
        postData: builder.mutation({
            query: (data) => ({
                url: '/bfhl',
                method: 'POST',
                body: data,
            }),
        }),
        getOperationCode: builder.query({
            query: () => ({
                url: '/bfhl',
                method: 'GET',
            }),
        }),
    }),
});

export const { usePostDataMutation, useGetOperationCodeQuery } = apiSlice;
