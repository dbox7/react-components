import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IStoreState {
  query: string;
  limit: number;
}

const initialState: IStoreState = {
  query: '',
  limit: 25,
};

export const storeSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    saveQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    saveLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { saveQuery, saveLimit } = storeSlice.actions;

export default storeSlice.reducer;
