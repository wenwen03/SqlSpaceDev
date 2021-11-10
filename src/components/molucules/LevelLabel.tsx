import React, { VFC } from 'react'
import Chip from '../atoms/Chip'

interface PROPS {
  level: number
}

const LevelLabel: VFC<PROPS> = ({ level }) => (
  <Chip label={`Lv. ${level}`}/>
)

export default LevelLabel
