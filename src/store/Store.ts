import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storeSlice from './Slice';
import { fetchData } from '../utils/api';

const rootReducer = combineReducers({
  storeSlice,
  [fetchData.reducerPath]: fetchData.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchData.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
