import React, { ChangeEvent, useState, VFC } from 'react'
import styles from '@/styles/components/organisms/SQLRunner.module.scss'
import Monitor from '../molucules/Monitor'
import RewardCard from '../molucules/HintCard'
import SqlBtnCard from '../molucules/SqlBtnCard'

interface PROPS {
  sqlAPI: (query: string) => void
}

const SQLRunner: VFC<PROPS> = ({
  sqlAPI 
}) => {
  const [ query, setQuery ] = useState('')
  const emitQuery = (e: ChangeEvent<HTMLTextAreaElement>)=> setQuery(e.target.value)
  const run = () => sqlAPI(query)

  return (
    <div className={ styles['sql-runner'] }>
      <Monitor className={ styles.monitor } emitQuery={ emitQuery }/>
      <RewardCard className={ styles['reward-card'] } />
      <SqlBtnCard className={ styles['sql-btn-card'] }  run={ run }/>
    </div>
  )
}

export default SQLRunner;
