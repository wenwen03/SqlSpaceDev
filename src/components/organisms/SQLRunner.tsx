import Reward from '@/types/Reward'
import React, { VFC } from 'react'
import styles from '@/styles/components/organisms/SQLRunner.module.scss'
import Monitor from '../molucules/Monitor'
import RewardCard from '../molucules/RewardCard'
import SqlBtnCard from '../molucules/SqlBtnCard'

interface PROPS {
  rewards: Array<Reward>
}

const SQLRunner: VFC<PROPS> = ({
  rewards
}) => {
  return (
    <div className={ styles['sql-runner'] }>
      <Monitor className={ styles.monitor }/>
      <RewardCard rewards={ rewards } className={ styles['reward-card'] } />
      <SqlBtnCard className={ styles['sql-btn-card'] }/>
    </div>
  )
}

export default SQLRunner
