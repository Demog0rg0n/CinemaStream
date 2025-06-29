import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import api from '../api/movies';

export const store = configureStore({
    reducer: {
    // Добавляем reducer API
    [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store