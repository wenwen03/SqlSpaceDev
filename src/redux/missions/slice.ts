import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Missin01 from '@/scenarios/Mission01'
import Chat from '@/types/Chat';
import MissionFunc01 from '@/scenarios/MissionFunc01';

export interface MissionState {
  isEmphasize: Object,
  initialText: string,
  step: number,
  scenario: Array<Chat>
};

export const initialState: MissionState = {
  isEmphasize: {},
  initialText: '',
  step: 2,
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
      if(MissionFunc01[state.step].condition !== action.payload) return
      MissionFunc01[state.step].stepUpFunction(state)
    }
  },
});

export default missionSlice;