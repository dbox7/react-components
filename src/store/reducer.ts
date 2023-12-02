import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../utils/types';

export interface IStoreState {
  controlledForm: IFormData | Record<string, never>;
  uncontrolledForm: IFormData | Record<string, never>;
  countries: string[];
}

const initialState: IStoreState = {
  controlledForm: {},
  uncontrolledForm: {},
  countries: ['Russia', 'USA'],
};

export const storeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateCtrlForm: (state, action: PayloadAction<IFormData>) => {
      state.controlledForm = action.payload;
    },
    updateUnCtrlForm: (state, action: PayloadAction<IFormData>) => {
      state.uncontrolledForm = action.payload;
    },
  },
});

export const { updateCtrlForm, updateUnCtrlForm } = storeSlice.actions;

export default storeSlice.reducer;
