import ScenarioStep from "@/types/ScenarioStep";
import createScenarioStep from "@/utils/createScenarioStep";

const SelectScenario: Array<ScenarioStep> = [
  createScenarioStep(
    {speaker: 'human', comment: 'さて、家が一件あるだけでは殺風景なので、他の建物も欲しいですねー'},
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'そうね、ただ新しく建設しようにも資源がないからまずは資源の採掘をやろう。まずはあの木をクリックしよう！'},
    state => { state.step += 1; state.isEmphasize = { spaceWood: true } },
    'spaceWood'
  ),
]


export default SelectScenario;