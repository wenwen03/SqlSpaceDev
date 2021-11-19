import BottomMenu from '@/components/organisms/BottomMenu'
import Mission from '@/components/templates/Mission'
import React, { useState, VFC } from 'react'
import styles from '@/styles/pages/insert.module.scss'
import ResidenceList from '@/components/organisms/ResidenceList'
import ChatBox from '@/components/organisms/ChatBox'
import SQLRunner from '@/components/organisms/SQLRunner'
import CompleteModal from '@/components/organisms/CompleteModal'
import RunResultWindow from '@/components/organisms/RunResultWindow'
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'
import SpaceWoodList from '@/components/organisms/SpaceWoodList'
import CrossSection from '@/components/molucules/CrossSection'

const Select: VFC = () => {

  const dispatch = useDispatch()
  dispatch(missionSlice.actions.setInitialState('select'))

  const [isSqlMode, setIsSqlMode] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)
  const [showCorssSection, setShowCrossSection] = useState(false)

  return (
    <Mission
      title='Select文の基本 | SQL Space Dev'
      wholeClass={ styles.layout }
    >
      <CompleteModal/>
      <ResidenceList 
        isSqlMode={ isSqlMode }
        setIsSqlMode={ setIsSqlMode }
      />
      <SpaceWoodList 
        isSqlMode={ isSqlMode }
        setIsSqlMode={ setIsSqlMode } 
        setShowCrossSection={ setShowCrossSection }
      />
      { showCorssSection && <CrossSection/> }
      { !isSqlMode && <BottomMenu /> }
      { isSqlMode && <SQLRunner setShowResultModal={ setShowResultModal}/> }
      {
        showResultModal && <RunResultWindow 
        isOpen={ showResultModal } 
        setShowResultModal={ setShowResultModal } 
        result='Query OK, 1 row affected (0.00 sec)'/> 
      }
      <ChatBox isSqlMode={ isSqlMode }/>
    </Mission>
  )
}

export default Select
