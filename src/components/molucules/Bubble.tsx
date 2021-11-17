import React, { VFC } from 'react'
import Paper from '@/components/atoms/Paper'
import styles from '@/styles/components/molucules/Bubble.module.scss'
import Avatar from '@/components/atoms/Avatar'
import P from '../atoms/P'

interface PROPS {
  comment: string,
  speaker: 'dog' | 'human',
  className?: string
}

const Bubble: VFC<PROPS> = ({
  comment,
  speaker,
  className
}) => (
  <Paper className={`${ styles.bubble } ${ className }`} >
    <Avatar
      alt='charactor icon'
      src={ speaker === 'dog'? '/img/dog-icon.jpg' : '/img/human-icon.png' }
      className={ styles.avatar }
    />
    <P className={ styles.text }>{ 
      comment.split('@').map(( str, index ) => (
        index % 2 === 0 ? str : <span key={ index } className={ styles.orange }>{ str }</span>
      ))
    }</P>
  </Paper>
)

export default Bubble
