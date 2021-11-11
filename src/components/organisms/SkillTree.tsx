import React, { VFC } from 'react'
import SkillLines from './SkillLines'
import SkillNodes from './SkillNodes'

const SkillTree: VFC = () => (
  <>
    <SkillNodes />
    <SkillLines />
  </>
)

export default SkillTree