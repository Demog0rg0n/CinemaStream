import { ExtendetMovieType, MovieType, Type } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.poiskkino.dev/v1.4'; 

interface MoviesParams {
    genre?: string;
    year?: number;
    rating?: number;
    sortField?: string;
    sortType: number;
    type: Type;
    notNullFields?: string[];
    limit?: number;

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
                type: params.type,
                notNullFields: params.notNullFields,
                limit: params.limit || 10,
            },
        }),
        }),

        getMovieDetails: build.query<ExtendetMovieType, string | undefined>({
            query: (id) => ({
                url: `/movie/${id}`,
                params: {
                token: 'X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB',
            },
        }),
        }),
    }),
});

export const {useGetMoviesQuery, useGetMovieDetailsQuery} = moviesApi;
export default moviesApi;