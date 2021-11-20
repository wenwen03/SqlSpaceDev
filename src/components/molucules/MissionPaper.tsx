import React, { VFC } from 'react'
import Li from '@/components/atoms/Li'
import P from '@/components/atoms/P'
import Paper from '@/components/atoms/Paper'
import Button from '@/components/atoms/Button'
import  Router from 'next/router';
import styles from '@/styles/components/molucules/MissionPaper.module.scss';
import { useMissionState } from '@/redux/missions/selectors'
import MissionMap from '@/scenarios/MissionMap'

interface PROPS {
  purposes: Array<string>
}

const MissionPaper: VFC<PROPS> = ({
  purposes,
}) => {

  const state = useMissionState().mission
  const targetMission = MissionMap[state.missionName]
  const toMission = () => targetMission.title === 'Locked' ?
   alert('この機能は未実装です。申し訳ありませんが、他のミッションを試してみて下さい > <') 
   : Router.push(targetMission.nextPath)

  return (
    <Paper className={ styles.missionPaper }>
      <div className={ styles.textWrapper }>
        <P>このミッションの目的</P>
        <Li list={ purposes } />
      </div>
      <div className={ styles.btnWrapper }>
        <Button onClick={ toMission }>start</Button>
      </div>
    </Paper>
  )
}

export default MissionPaper
