import React, { ChangeEvent, VFC } from 'react'
import Textarea from '@/components/atoms/Textarea'
import styles from '@/styles/components/molucules/Monitor.module.scss'
import SideFrame from '@/components/molucules/SideFrame'

interface PROPS {
  className: string
  emitQuery: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Monitor: VFC<PROPS> = ({
  className,
  emitQuery
}) => {
  return (
    <SideFrame className={ className } >
      <Textarea
        onChange={ emitQuery }
        className={ styles.textarea }
        textareaClass={ styles.input } 
        rows={11} 
        label='write SQL'
      />
    </SideFrame>
  )
}

export default Monitor
