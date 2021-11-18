import React, { ChangeEvent, useState, VFC } from 'react'
import styles from '@/styles/components/organisms/SQLRunner.module.scss'
import Monitor from '../molucules/Monitor'
import RewardCard from '../molucules/HintCard'
import SqlBtnCard from '../molucules/SqlBtnCard'
import { useMissionState } from '@/redux/missions/selectors'
import { useDispatch } from 'react-redux'
import ResidenceRow from '@/types/ResidenceRow'
import missionSlice from '@/redux/missions/slice'

interface PROPS {
  setShowResultModal: (boolean) => void
}

const SQLRunner: VFC<PROPS> = ({
  setShowResultModal
}) => {

  const state = useMissionState().mission
  const dispatch = useDispatch()

  const sqlAPI = function(): void {

    const today = new Date().toLocaleDateString()

    let record: ResidenceRow;
    switch( state.residenceList[0].rows.length) {
      case 0: record = { 'room_no': 101, name: 'dog', 'moved_at': today }; break;
      case 1: record = { 'room_no': 102, name: 'test-user', 'moved_at': today }; break;
      case 2: record = { 'room_no': 103, name: 'zako', 'moved_at': today }; break;
      default: record = { 'room_no': (100 + state.residenceList[0].rows.length), name: 'モンゴリアンチョップ', 'moved_at': today }; break;
    }

    dispatch(missionSlice.actions.pushResidenceList(record))
    setShowResultModal(false)
  }


  const [ query, setQuery ] = useState('')
  const emitQuery = (e: ChangeEvent<HTMLTextAreaElement>)=> setQuery(e.target.value)

  return (
    <div className={ styles['sql-runner'] }>
      <Monitor className={ styles.monitor } emitQuery={ emitQuery }/>
      <RewardCard className={ styles['reward-card'] } />
      <SqlBtnCard className={ styles['sql-btn-card'] }  run={ sqlAPI }/>
    </div>
  )
}

export default SQLRunner;
