import Mission from '@/components/templates/Mission'
import React, { useState, VFC } from 'react'
import styles from '@/styles/pages/insert.module.scss'
import BottomMenu from '@/components/organisms/BottomMenu'
import ChatBox from '@/components/organisms/ChatBox'
import SQLRunner from '@/components/organisms/SQLRunner'
import CompleteModal from '@/components/organisms/CompleteModal'
import RunResultWindow from '@/components/organisms/RunResultWindow'
import ResidenceList from '@/components/organisms/ResidenceList'
import missionSlice from '@/redux/missions/slice'
import { useDispatch } from 'react-redux'
import InsertScenario from '@/scenarios/InsertScenario'


const Insert: VFC = () => {

  const dispatch = useDispatch()
  dispatch(missionSlice.actions.setInitialState(InsertScenario))

  const [isSqlMode, setIsSqlMode] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)

  return (
    <Mission
      title={'Insert文の基本 | SQL Space Dev'}
      wholeClass={ styles.layout }
    >
      <CompleteModal/>
      <ResidenceList setIsSqlMode={ setIsSqlMode }/>
      { !isSqlMode && <BottomMenu /> }
      { isSqlMode && <SQLRunner setShowResultModal={ setShowResultModal}/> }
      {
        showResultModal && <RunResultWindow 
        isOpen={ showResultModal } 
        setShowResultModal={ setShowResultModal } 
        result='Query OK, 1 row affected (0.00 sec)'/> 
      }
      <ChatBox />
    </Mission>
  )
}

export default Insert
