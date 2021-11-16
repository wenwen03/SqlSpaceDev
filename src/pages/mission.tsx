import Layout from '@/components/templates/Layout'
import React, { useEffect, useState, VFC } from 'react'
import styles from '@/styles/pages/mission.module.scss'
import Ground from '@/components/molucules/Ground'
import BottomMenu from '@/components/organisms/BottomMenu'
import InterractiveResidence from '@/components/organisms/InterractiveResidence'
import ChatBox from '@/components/organisms/ChatBox'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Reward from '@/types/Reward'
import SQLRunner from '@/components/organisms/SQLRunner'
import ResidenceEntity from '@/types/ResidenceEntity'
import ResidenceRow from '@/types/ResidenceRow'
import genScenario from '@/scenarios/Mission01'
import { useDispatch } from 'react-redux';
import counterSlice from '@/redux/missions/slice'
import { useCounterState } from '@/redux/missions/selectors'  

const REWARDS: Array<Reward> = [
  { icon: <FastfoodIcon/>, amount: 1000 }
]

// residenceの情報（Mock）（apiで取得する）
const RESIDENCE_LIST: Array<ResidenceEntity> = [
  {
    name: 'haitsu_tanaka',
    columns: ['id', 'name', 'moved_at'],
    rows:  [
      { id: 101, name: 'sato', 'moved_at': '2021/11/11'},
      { id: 102, name: 'suzuki', 'moved_at': '2021/11/12'}
    ]
  }
]

const mission: VFC = () => {

  const dispatch = useDispatch()
  const state = useCounterState().counter
  const ducks = () => {
    dispatch(counterSlice.actions.emphasizeBtn())
  }

  useEffect(() => {
    ducks()
  }, [])

  // SQLモードステート定義
  const [sqlFlg, setSqlFlg] = useState(false);
  const startSQL = () => setSqlFlg(true)
  const endSQL = () => setSqlFlg(false)

  // Residenceステート定義
  const [residenceList, updateResidenceList] = useState(RESIDENCE_LIST)
  const sqlAPI = function(): void {
    const record: ResidenceRow = { id: 103, name: 'tanaka', 'moved_at': '2021/11/13'}
    residenceList[0].rows.push(record)
    updateResidenceList([ ...residenceList ])
  }

  const Scenario = genScenario()

  return (
    <Layout
      title={'Insert文の基本 | SQL Space Dev'}
      wholeClass={ styles.layout }
    >
      <Ground />
      {
        residenceList.map(( residence, index ) => 
          <InterractiveResidence 
            isEmphasize={ Scenario.isEmphasize }
            stepFunc={ Scenario.genNextStep }
            key={ index }
            startSQL={ startSQL }
            endSQL={ endSQL }
            entity={ residence }
          />
        )
      }
      { !sqlFlg && <BottomMenu /> }
      { sqlFlg && <SQLRunner rewards={ REWARDS } sqlAPI={ sqlAPI } /> }
      <ChatBox 
        step={ Scenario.step }
        sqlFlg={ sqlFlg }
        chatList={ Scenario.chatList }
      />
    </Layout>
  )
}

export default mission
