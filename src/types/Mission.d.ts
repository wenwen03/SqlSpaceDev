export interface Mission {
  title: string,
  nextPath: string,
  description: string,
  purposes: Array<string>
}

export default interface MissionMap {
  Insert: Mission,
  Select: Mission
}