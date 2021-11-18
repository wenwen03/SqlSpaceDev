import InsertScenario from "@/scenarios/InsertScenario";
import SelectScenario from "@/scenarios/SelectScenario";
import ScenarioStep from "@/types/ScenarioStep";

const scenario = {
  insert: InsertScenario,
  select: SelectScenario
}

export default function(missionName: string): Array<ScenarioStep> {
  return scenario[missionName]
}