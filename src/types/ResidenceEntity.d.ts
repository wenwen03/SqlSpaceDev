import ResidenceRow from "./TableRow"

export default interface TableEntity{
  name: string,
  rows: Array<ResidenceRow>,
  columns: Array<string>
}