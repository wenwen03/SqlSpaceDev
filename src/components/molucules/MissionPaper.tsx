import React, { VFC } from 'react'
import Li from '@/components/atoms/Li'
import P from '@/components/atoms/P'
import Paper from '@/components/atoms/Paper'
import Button from '@/components/atoms/Button'
import  Router from 'next/router';
import styles from '@/styles/components/molucules/MissionPaper.module.scss';

interface PROPS {
  purposes: Array<string>
}

const MissionPaper: VFC<PROPS> = ({
  purposes,
}) => {

  const toMission = function(): void { Router.push('/mission') }

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
