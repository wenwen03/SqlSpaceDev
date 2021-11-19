import { useMissionState } from '@/redux/missions/selectors'
import styles from '@/styles/components/molucules/TaskCard.module.scss'
import React, { useState, VFC } from 'react'
import Card from '../atoms/Card'

const TaskCard:VFC = () => {
  const [taskStep, setTaskStep] = useState(0)
  const state = useMissionState().mission
  return (
    <Card className={ styles['task-card'] }>
      { state.tasks[taskStep] }
    </Card>
  )
}

export default TaskCard
