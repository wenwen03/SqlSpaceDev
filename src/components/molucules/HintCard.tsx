import React, { VFC } from 'react'
import Card from '@/components/atoms/Card'
import H6 from '@/components/atoms/H6'
import P from '../atoms/P'
import styles from '@/styles/components/molucules/HintCard.module.scss'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useMissionState } from '@/redux/missions/selectors'

interface PROPS {
  className?: string
}

const RewardCard: VFC<PROPS> = ({
  className
}) => {

  const state = useMissionState().mission

  return (
  <Card className={ className }>
    <div className={ styles.title }>
        <LightbulbIcon/>
        <H6 className={ styles.title }>ヒント</H6>
    </div>
    <P className={ styles.goal }>{ state.hint }</P>
  </Card>
)}

export default RewardCard
