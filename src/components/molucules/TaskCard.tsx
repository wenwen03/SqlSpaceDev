import { useMissionState } from '@/redux/missions/selectors'
import styles from '@/styles/components/molucules/TaskCard.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import React, { VFC } from 'react'
import Card from '../atoms/Card'
import Chip from '../atoms/Chip';


const TaskCard:VFC = () => {
  const state = useMissionState().mission
  return (
    <Card 
      className={`
        ${ styles['task-card'] }
        ${ state.isEmphasize['taskCard'] ? animations.emphasize : '' }
      `}
    >
      <Chip label={`Task（${ state.taskStep }/ 3 ）`} className={ styles.label }/>
      { state.tasks[state.taskStep] }
    </Card>
  )
}

export default TaskCard
