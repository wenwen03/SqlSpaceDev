import Serif from "./Serif";

export default interface ScenarioStep {
  serif: Serif,
  condition?: string,
  action: (MissionState?) => void
}