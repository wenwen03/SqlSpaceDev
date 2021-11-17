import Layout from '@/components/templates/Layout'
import React, { useState, VFC } from 'react'
import styles from '@/styles/pages/mission.module.scss'
import Ground from '@/components/molucules/Ground'
import BottomMenu from '@/components/organisms/BottomMenu'
import InterractiveResidence from '@/components/organisms/InterractiveResidence'
import ChatBox from '@/components/organisms/ChatBox'
import SQLRunner from '@/components/organisms/SQLRunner'
import ResidenceEntity from '@/types/ResidenceEntity'
import ResidenceRow from '@/types/ResidenceRow'
import { useMissionState } from '@/redux/missions/selectors'
import CompleteModal from '@/components/organisms/CompleteModal'
import RunResultWindow from '@/components/organisms/RunResultWindow'
import StarSky from '@/components/molucules/StarSky'

// residenceの情報（Mock）（apiで取得する）
const RESIDENCE_LIST: Array<ResidenceEntity> = [
  {
    name: 'house01',
    columns: ['room_no', 'name', 'moved_at'],
    rows:  []
  }
]

const mission: VFC = () => {

  // SQLモードステート定義
  const [sqlFlg, setSqlFlg] = useState(false);
  const startSQL = () => setSqlFlg(true)
  const endSQL = () => setSqlFlg(false)

  // 結果モーダルステート定義
  const [showResultModal, setShowResultModal] = useState(false)
  const closeResultModal = () => setShowResultModal(false)
  const openResultModal = () => setShowResultModal(true)

  // Residenceステート定義
  const [residenceList, updateResidenceList] = useState(RESIDENCE_LIST)
  const sqlAPI = function(): void {

    const today = new Date().toLocaleDateString()

    let record: ResidenceRow;
    switch(residenceList[0].rows.length) {
      case 0: record = { 'room_no': 101, name: 'dog', 'moved_at': today }; break;
      case 1: record = { 'room_no': 102, name: 'test-user', 'moved_at': today }; break;
      case 2: record = { 'room_no': 103, name: 'zako', 'moved_at': today }; break;
    }

    residenceList[0].rows.push(record)
    updateResidenceList([ ...residenceList ])
    openResultModal()
  }

  const state = useMissionState().mission

  return (
    <Layout
      title={'Insert文の基本 | SQL Space Dev'}
      wholeClass={ styles.layout }
    >
      <StarSky/>
      <Ground />
      {
        residenceList.map(( residence, index ) => 
          <InterractiveResidence 
            key={ index }
            startSQL={ startSQL }
            endSQL={ endSQL }
            entity={ residence }
          />
        )
      }
      { !sqlFlg && <BottomMenu /> }
      { sqlFlg && <SQLRunner sqlAPI={ sqlAPI } /> }
      <CompleteModal/>
      <RunResultWindow isOpen={showResultModal} onClose={closeResultModal} result='Query OK, 1 row affected (0.00 sec)'/>
      <ChatBox 
        step={ state.step }
        sqlFlg={ sqlFlg }
        chatList={ state.scenario }
      />
    </Layout>
  )
}

export default mission
