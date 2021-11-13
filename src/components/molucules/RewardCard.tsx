import React, { ReactNode, VFC } from 'react'
import Card from '@/components/atoms/Card'
import H5 from '@/components/atoms/H5'
import P from '../atoms/P'
import Reward from '@/types/Reward'
import styles from '@/styles/components/molucules/RewardCard.module.scss'

interface PROPS {
  rewards: Array<Reward>,
  className?: string
}

const RewardCard: VFC<PROPS> = ({
  rewards,
  className
}) => (
  <Card className={ className }>
    <H5 className={ styles.title }>クリア報酬</H5>
    { rewards.map(( reward, index ) => (
      <span key={ index } className={ styles.reward }>
        { reward.icon }
        <P>{ reward.amount }</P>
      </span>
    ))}
  </Card>
)

export default RewardCard
