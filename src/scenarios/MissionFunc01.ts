import { MissionState } from "@/redux/missions/slice"

export default [
  {
    condition: 'residence',
    step(state: MissionState){
      state.step += 1
      state.isEmphasize = { titleWindowBtn : true }
    },
  },
  {
    condition: 'titleWindowBtn',
    step(state: MissionState){
      state.step += 1
      state.isEmphasize = { titleWindowBtn : true }
    },
  }
]