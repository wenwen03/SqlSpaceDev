import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ResidenceRow from '@/types/ResidenceRow';
import TableEntity from '@/types/TableEntity';
import InsertScenario from '@/scenarios/InsertScenario';
import ScenarioStep from '@/types/ScenarioStep';

export interface MissionState {
  scenario: Array<ScenarioStep>,
  step: number,
  goal: string,
  initialText: string,
  isEmphasize: Object,
  showCompleteModal: boolean,
  residenceList: Array<TableEntity>,
};

export const initialState: MissionState = {
  isEmphasize: {},
  initialText: '',
  step: 1,
  goal: '画面をクリックするとストリーが進みます',
  scenario: InsertScenario,
  showCompleteModal: false,
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
    setInitialState: (state, action) => {
      state.scenario = action.payload
    },
    nextStep: (state, action: PayloadAction<string>) => {
      if(InsertScenario[state.step].condition !== action.payload) return
      InsertScenario[state.step].action(state)
    },
    pushResidenceList: (state, action: PayloadAction<ResidenceRow>) => {
      state.residenceList[0].rows.push(action.payload)
    },
  },
});

export default missionSlice;