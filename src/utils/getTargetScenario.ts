import InsertScenario from "@/scenarios/InsertScenario";
import SelectScenario from "@/scenarios/SelectScenario";
import ScenarioStep from "@/types/ScenarioStep";

const scenario = {
  Insert: InsertScenario,
  Select: SelectScenario
}

export default function(missionName: string): Array<ScenarioStep> {
  return scenario[missionName]
}