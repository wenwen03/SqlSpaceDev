import BottomMenu from '@/components/organisms/BottomMenu'
import Mission from '@/components/templates/Mission'
import React, { VFC } from 'react'
import styles from '@/styles/pages/insert.module.scss'
import ResidenceList from '@/components/organisms/ResidenceList'
import ChatBox from '@/components/organisms/ChatBox'
import SQLRunner from '@/components/organisms/SQLRunner'
import CompleteModal from '@/components/organisms/CompleteModal'
import RunResultWindow from '@/components/organisms/RunResultWindow'
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'
import SelectScenario from '@/scenarios/SelectScenario'

const Select: VFC = () => {

  const dispatch = useDispatch()
  dispatch(missionSlice.actions.setInitialState(SelectScenario))

  return (
    <Mission 
      title='Select文の基本 | SQL Space Dev'
      wholeClass={ styles.layout }
    >
      <ResidenceList />
      <ChatBox />
      <SQLRunner />
      <CompleteModal/>
      <RunResultWindow result='Query OK, 1 row affected (0.00 sec)'/>
      <BottomMenu />
    </Mission>
  )
}

export default Select
