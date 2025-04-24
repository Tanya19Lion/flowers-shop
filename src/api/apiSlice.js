import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getAllBouquets: builder.query({
            query: () => '/bouquets',
        }),
        getOneBouquet: builder.query({
            query: (id) => `/bouquets/${id}`,
        }),
        getCategoriesTop: builder.query({
            query: () => '/categories-top',
        }),
        getCategoriesColours: builder.query({
            query: () => '/categories-colours',
        }),
        getCategoriesFormat: builder.query({
            query: () => '/categories-format',
        }),
        getCategoriesFlowers: builder.query({
            query: () => '/categories-flowers',
        }),
    }),
});

export const {
    useGetAllBouquetsQuery,
    useGetOneBouquetQuery,
    useGetCategoriesTopQuery,
    useGetCategoriesColoursQuery,
    useGetCategoriesFormatQuery,
    useGetCategoriesFlowersQuery,
} = apiSlice;