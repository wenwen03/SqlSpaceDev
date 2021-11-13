import React from 'react'
import Textarea from '../atoms/Textarea'
import WindowFrame from './WindowFrame'
import styles from '@/styles/components/molucules/Monitor.module.scss'

const Moniter = () => {
  return (
    <WindowFrame 
      clickaway={() => console.log('hoge')}
      className={ styles.monitor }
    >
      <Textarea
        className={ styles.textarea }
        textareaClass={ styles.input } 
        rows={10} 
        label='write SQL'
      />
    </WindowFrame>
  )
}

export default Moniter
