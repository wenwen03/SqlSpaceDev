import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MissionState {
  isEmphasizeBtn: boolean
};

export const initialState: MissionState = {
  isEmphasizeBtn: false
};

const missionSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    emphasizeBtn: (state) => ({
      ...state,
      isEmphasizeBtn: true
    }),
    unemphasizeBtn: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isEmphasizeBtn: action.payload
    }),
  },
});

export default missionSlice;