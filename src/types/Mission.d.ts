export interface Mission {
  title: string,
  nextPath: string,
  description: string,
  purposes: Array<string>
}

export default interface MissionMap {
  Insert: Mission,
  Select: Mission,
  Update: Mission,
  Delete: Mission,
  Create: Mission,
  Where: Mission,
  'Undefined Null': Mission,
  'Bulk Command': Mission,
  'Basic Function': Mission,
  'Ambiguous Search': Mission,
  'Range Search': Mission,
  Group: Mission,
  'Arthmetic Operator': Mission,
  Index: Mission,
  'Union Except Intersect': Mission,
  Pagenation: Mission,
  'Aggregate Function': Mission,
  Join: Mission,
  Case: Mission,
  Performance: Mission
}