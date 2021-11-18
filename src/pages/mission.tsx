import Mission from '@/components/templates/Mission'
import React, { VFC } from 'react'
import styles from '@/styles/pages/mission.module.scss'
import Ground from '@/components/molucules/Ground'
import BottomMenu from '@/components/organisms/BottomMenu'
import ChatBox from '@/components/organisms/ChatBox'
import SQLRunner from '@/components/organisms/SQLRunner'
import CompleteModal from '@/components/organisms/CompleteModal'
import RunResultWindow from '@/components/organisms/RunResultWindow'
import StarSky from '@/components/molucules/StarSky'
import ResidenceList from '@/components/organisms/ResidenceList'


const mission: VFC = () => {

  return (
    <Mission
      title={'Insert文の基本 | SQL Space Dev'}
      wholeClass={ styles.layout }
    >
      <BottomMenu />
      <ResidenceList />
      <SQLRunner />
      <CompleteModal/>
      <RunResultWindow result='Query OK, 1 row affected (0.00 sec)'/>
      <ChatBox />
    </Mission>
  )
}

export default mission
