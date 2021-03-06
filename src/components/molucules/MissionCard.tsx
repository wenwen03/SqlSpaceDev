import Card from '@/components/atoms/Card'
import H4 from '@/components/atoms/H4'
import P from '@/components/atoms/P'
import MissionPaper from '@/components/molucules/MissionPaper'
import React, { VFC } from 'react'
import styles from '@/styles/components/molucules/MissionCard.module.scss'

interface PROPS {
  title: string,
  description: string,
  purposes: Array<string>,
  className: string
}

const MissionCard: VFC<PROPS> = ({
  title,
  description,
  purposes,
  className
}) => (
  <Card className={ className }>
    <H4>{ title }</H4>
    <P className={ styles.description }> { description }</P>
    <MissionPaper purposes={ purposes } />
  </Card>
)

export default MissionCard
