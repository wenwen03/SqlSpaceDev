import SpaceTreeRow from "./SpaceTreeRow";

export default interface SpaceTreeEntity {
  name: string,
  rows: Array<SpaceTreeRow>,
  columns: Array<string>
}
