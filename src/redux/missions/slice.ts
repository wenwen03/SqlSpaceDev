import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Missin01 from '@/scenarios/Mission01'
import Chat from '@/types/Chat';
import MissionFunc01 from '@/scenarios/MissionFunc01';
import ResidenceEntity from '@/types/ResidenceEntity';
import ResidenceRow from '@/types/ResidenceRow';

export interface MissionState {
  isEmphasize: Object,
  initialText: string,
  step: number,
  goal: string,
  scenario: Array<Chat>
  showCompleteModal: boolean,
  showResultModal: boolean,
  isSqlMode: boolean,
  residenceList: Array<ResidenceEntity>
};

export const initialState: MissionState = {
  isEmphasize: {},
  initialText: '',
  step: 1,
  goal: '画面をクリックするとストリーが進みます',
  scenario: Missin01,
  showCompleteModal: false,
  showResultModal: false,
  isSqlMode: false,
  residenceList: [
    {
      name: 'house01',
      columns: ['room_no', 'name', 'moved_at'],
      rows:  []
    }
  ]
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
    },
    updateSqlMode: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isSqlMode: action.payload
    }),
    updateShowResultModal: (state, action: PayloadAction<boolean>) => ({
      ...state,
      showResultModal: action.payload
    }),
    pushResidenceList: (state, action: PayloadAction<ResidenceRow>) => {
      state.residenceList[0].rows.push(action.payload)
    },
  },
});

export default missionSlice;