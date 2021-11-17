import { MissionState } from "@/redux/missions/slice"

interface StepUpInfo {
  condition: string,
  stepUpFunction: (MissionState?) => void
}

const defaultObject: StepUpInfo = {
  condition: 'main',
  stepUpFunction(state: MissionState) { state.step += 1} 
}

const stepUpInfo: Array<StepUpInfo> = [
  { condition: '', stepUpFunction() {} },
  { 
    condition: 'main', 
    stepUpFunction(state: MissionState) {
      state.step += 1
      state.isEmphasize = { residence: true }
    } 
  },
  {
    condition: 'residence',
    stepUpFunction(state: MissionState){
      state.step += 1
      state.isEmphasize = { titleWindowBtn : true }
    },
  },
  {
    condition: 'titleWindowBtn',
    stepUpFunction(state: MissionState){
      state.step += 1
    },
  },
  {
    condition: 'main',
    stepUpFunction(state: MissionState){
      state.step += 1
      state.isEmphasize = { residenceWindow: true }
    },
  },
  {
    condition: 'main',
    stepUpFunction(state: MissionState){
      state.step += 1
      state.isEmphasize = { monitor: true }
    },
  },
  {
    condition: 'main',
    stepUpFunction(state: MissionState){
      state.step += 1
      state.isEmphasize = {}
    },
  },
  { 
    condition: 'main', 
    stepUpFunction(state: MissionState) { 
      state.step += 1
      state.initialText = `INSERT INTO yamada_haitsu \n  (id, name, moved_at)\n  VALUES(101, dog, now());`
    } 
  },
  defaultObject,
  defaultObject,
  defaultObject,
  defaultObject,
  defaultObject,
  { 
    condition: 'main', 
    stepUpFunction(state: MissionState) { 
      state.step += 1
      state.isEmphasize = { runBtn: true }
    } 
  },
  { 
    condition: 'runResultModal', 
    stepUpFunction(state: MissionState) {
      state.step += 1
      state.isEmphasize = {}
      state.initialText = ''
    } 
  },
  { 
    condition: 'main', 
    stepUpFunction(state: MissionState) {
      state.step += 1
      state.goal = 'INSERT INTO 建物名\n（カラム名1, カラム名2, ...）\nVALUES（値1, 値2,  ...）;'
    } 
  },
  { condition: 'runResultModal', stepUpFunction(state: MissionState) { state.step += 1} },
  defaultObject,
  { condition: 'runResultModal', stepUpFunction(state: MissionState) { state.step += 1} },
  { 
    condition: 'main',
    stepUpFunction(state: MissionState) {
      state.step += 1
      state.showCompleteModal = true
    }
  },
  { condition: '', stepUpFunction(state: MissionState) { state.step += 1} },
]

export default stepUpInfo;
