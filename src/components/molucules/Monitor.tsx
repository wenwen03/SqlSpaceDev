import React, { VFC } from 'react'
import Textarea from '@/components/atoms/Textarea'
import styles from '@/styles/components/molucules/Monitor.module.scss'
import SideFrame from '@/components/molucules/SideFrame'

interface PROPS {
  className: string
}

const Monitor: VFC<PROPS> = ({
  className
}) => {
  return (
    <SideFrame className={ className } >
      <Textarea
        className={ styles.textarea }
        textareaClass={ styles.input } 
        rows={11} 
        label='write SQL'
      />
    </SideFrame>
  )
}

export default Monitor
