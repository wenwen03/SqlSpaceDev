import ResidenceRow from "./ResidenceRow"

export default interface ResidenceEntity {
  name: string,
  rows: Array<ResidenceRow>,
  columns: Array<string>
}