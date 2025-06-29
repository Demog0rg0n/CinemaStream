import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  // Добавьте другие поля по необходимости
}

interface CatalogState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CatalogState = {
  movies: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        fetchMoviesStart(state) {
        state.isLoading = true;
        state.error = null;
        },
        fetchMoviesSuccess(state, action: PayloadAction<Movie[]>) {
        state.isLoading = false;
        state.movies = action.payload;
        },
        fetchMoviesFailure(state, action: PayloadAction<string>) {
        state.isLoading = false;
        state.error = action.payload;
        },
        // Можно добавить другие редьюсеры, например, фильтрацию или сортировку
    },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} = catalogSlice.actions;

export default catalogSlice.reducer;