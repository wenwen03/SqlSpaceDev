import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TableEntity from '@/types/TableEntity';
import TableRow from '@/types/TableRow';
import getTargetScenario from '@/utils/getTargetScenario';

export interface MissionState {
  missionName: string,
  step: number,
  goal: string,
  initialText: string,
  isEmphasize: Object,
  showCompleteModal: boolean,
  residenceList: Array<TableEntity>,
  spaceWoodList: Array<TableEntity>
  tasks: Array<string>
};

export const initialState: MissionState = {
  isEmphasize: {},
  initialText: '',
  step: 1,
  goal: '画面をクリックするとストリーが進みます',
  missionName: 'insert',
  showCompleteModal: false,
  residenceList: [
    {
      name: 'house01',
      columns: ['room_no', 'name', 'moved_at'],
      rows:  []
    }
  ],
  spaceWoodList: [
    {
      name: 'space_wood01',
      columns: ['id', 'hardness', 'density'],
      rows:  []
    }
  ],
  tasks: ['hardnessが70以上のSpaceWoodを取得して下さい']
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.missionName = action.payload
    },
    nextStep: (state, action: PayloadAction<string>) => {
      const scenario = getTargetScenario(state.missionName)
      if(scenario[state.step].condition !== action.payload) return
      scenario[state.step].action(state)
    },
    pushResidenceList: (state, action: PayloadAction<TableRow>) => {
      state.residenceList[0].rows.push(action.payload)
    },
  },
});

export default missionSlice;