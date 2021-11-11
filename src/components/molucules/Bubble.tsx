import React, { VFC } from 'react'
import Paper from '@/components/atoms/Paper'
import styles from '@/styles/components/molucules/Bubble.module.scss'
import Avatar from '@/components/atoms/Avatar'
import P from '../atoms/P'

interface PROPS {
  comment: string,
  speaker: 'dog' | 'human'
}

const Bubble: VFC<PROPS> = ({
  comment,
  speaker
}) => (
  <Paper className={ styles.bubble } >
    <Avatar
      alt='charactor icon'
      src={ speaker === 'dog'? '/img/dog-icon.jpg' : '/img/human-icon.png'}
      className={ styles.avatar }
    />
    <P>{ comment}</P>
  </Paper>
)

export default Bubble
