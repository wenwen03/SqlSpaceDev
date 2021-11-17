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

// residenceの情報（Mock）（apiで取得する）
const RESIDENCE_LIST: Array<ResidenceEntity> = [
  {
    name: 'haitsu_tanaka',
    columns: ['id', 'name', 'moved_at'],
    rows:  []
  }
]

const mission: VFC = () => {

  // SQLモードステート定義
  const [sqlFlg, setSqlFlg] = useState(false);
  const startSQL = () => setSqlFlg(true)
  const endSQL = () => setSqlFlg(false)

  // Mission完了モーダルステート定義
  const [showCompleteModal, setShowCompleteModa] = useState(false)
  const closeCompleteModal = () => setShowCompleteModa(false)

  // 結果モーダルステート定義
  const [showResultModal, setShowResultModal] = useState(false)
  const closeResultModal = () => setShowResultModal(false)
  const openResultModal = () => setShowResultModal(true)

  // Residenceステート定義
  const [residenceList, updateResidenceList] = useState(RESIDENCE_LIST)
  const sqlAPI = function(): void {
    const record: ResidenceRow = { id: 103, name: 'tanaka', 'moved_at': '2021/11/13'}
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
      <CompleteModal isOpen={ showCompleteModal } onClose={ closeCompleteModal }/>
      <RunResultWindow isOpen={showResultModal} onClose={closeResultModal} result=''/>
      <ChatBox 
        step={ state.step }
        sqlFlg={ sqlFlg }
        chatList={ state.scenario }
      />
    </Layout>
  )
}

export default mission
