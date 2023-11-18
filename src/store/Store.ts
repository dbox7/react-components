import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storeSlice from './Slice';

const rootReducer = combineReducers({
  storeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
