import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Missin01 from '@/scenarios/Mission01'
import Chat from '@/types/Chat';

export interface MissionState {
  isEmphasizeBtn: boolean,
  step: number,
  scenario: Array<Chat>
};

export const initialState: MissionState = {
  isEmphasizeBtn: false,
  step: 0,
  scenario: Missin01
};

const missionSlice = createSlice({
  name: 'mission',
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
    nextStep: (state, action: PayloadAction<string>) => {
      if(state.scenario[state.step].condition !== action.payload) return
      state.step += 1
      state.isEmphasizeBtn = true
    }
  },
});

export default missionSlice;