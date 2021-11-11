import React, { VFC } from 'react'
import SkillLines from './SkillLines'
import SkillNodes from './SkillNodes'
import styles from '@/styles/components/organisms/SkillTree.module.scss'

interface PROPS {
  className: string
}

const SkillTree: VFC<PROPS> = ({
  className
}) => (
  <div className={`${ className } ${ styles['skill-tree']}`}>
    <SkillNodes className={ styles['skill-node']}/>
    <SkillLines />
  </div>
)

export default SkillTree