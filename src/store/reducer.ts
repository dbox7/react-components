import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../utils/types';
import { COUNTRIES } from '../utils/constants';

export interface IStoreState {
  controlledForm: IFormData[];
  uncontrolledForm: IFormData[];
  countries: string[];
}

const initialState: IStoreState = {
  controlledForm: [],
  uncontrolledForm: [],
  countries: [...COUNTRIES],
};

export const storeSlice = createSlice({
  name: 'storeReducer',
  initialState,
  reducers: {
    updateCtrlForm: (state, action: PayloadAction<IFormData>) => {
      state.controlledForm.push(action.payload);
    },
    updateUnCtrlForm: (state, action: PayloadAction<IFormData>) => {
      state.uncontrolledForm.push(action.payload);
    },
  },
});

export const { updateCtrlForm, updateUnCtrlForm } = storeSlice.actions;

export default storeSlice.reducer;
