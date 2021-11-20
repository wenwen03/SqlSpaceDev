import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TableEntity from '@/types/TableEntity';
import TableRow from '@/types/TableRow';
import getTargetScenario from '@/utils/getTargetScenario';
import SpaceTreeEntity from '@/types/SpaceTreeEntity';

export interface MissionState {
  missionName: string,
  step: number,
  goal: string,
  initialText: string,
  isEmphasize: Object,
  showCompleteModal: boolean,
  residenceList: Array<TableEntity>,
  spaceWoodList: Array<SpaceTreeEntity>,
  tasks: Array<string>,
  taskStep: number
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
      name: 'space_tree',
      columns: ['id', 'name', 'hardness', 'density'],
      rows:  [
        {
          id: '001',
          name: 'wood',
          hardness: 89,
          density: 29
        },
        {
          id: '002',
          name: 'wood',
          hardness: 87,
          density: 67
        },
        {
          id: '003',
          name: 'wood',
          hardness: 76,
          density: 99
        },
        {
          id: '004',
          name: 'wood',
          hardness: 99,
          density: 19
        },
        {
          id: '005',
          name: 'trash',
          hardness: 2,
          density: 9
        },
        {
          id: '006',
          name: 'wood',
          hardness: 12,
          density: 89
        },
      ]
    }
  ],
  tasks: ['nameが「wood」のレコードだけ取得して下さい。','hardnessが70以上のレコードだけを取得して下さい。', 'densityが90未満のレコードだけを取得して下さい。'],
  taskStep: 0
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<string>) => {
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