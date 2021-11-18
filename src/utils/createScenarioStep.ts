import ScenarioStep from "@/types/ScenarioStep";
import Serif from "@/types/Serif";

/**
 * シナリオステップ作成
 * @param serif セリフ
 * @param action アクション
 * @param condition 発火条件
 * @returns シナリオステップ
 */
export default function(
  serif: Serif,
  action: (MissionState) => void = state => state.step += 1,
  condition: string = 'main',
): ScenarioStep {
  return {
    serif,
    action,
    condition
  }
}