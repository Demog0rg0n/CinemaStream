import { MovieType } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.kinopoisk.dev/v1.4'; 

interface MoviesParams {
    typeNumber: number;
    genre?: string;
    year?: number;
    rating?: number;
    sortField?: string;
    sortType: number;
    notNullFields?: string[];
}
interface MoviesResponse {
    docs: MovieType[];
}

const moviesApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (build) => ({
        getMovies: build.query<MoviesResponse, MoviesParams>({
        query: (params) => ({
                url: '/movie',
                params: {
                token: 'X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB',
                genre: params.genre,
                year: params.year,
                rating: params.rating,
                sortField: params.sortField,
                sortType: params.sortType || -1,
                typeNumber: params.typeNumber,
                notNullFields: params.notNullFields,
            },
        }),
        }),

        // getPopularMovies: build.query<PopularMoviesResponse, PopularMoviesParams>({
        // query: (params) => ({
        //     url: '/movie',
        //     params: {
        //     token: 'X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB',
        //     sortField: "votes.imdb",
        //     sortType: -1,
        //     typeNumber: params.typeNumber
        //     },
        // }),
        // }),
        getMovieDetails: build.query({
        query: (id) => `/movie/${id}`,
        }),
    }),
});

export const {useGetMoviesQuery, useGetMovieDetailsQuery} = moviesApi;
export default moviesApi;