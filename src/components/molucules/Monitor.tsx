import React, { ChangeEvent, VFC } from 'react'
import Textarea from '@/components/atoms/Textarea'
import styles from '@/styles/components/molucules/Monitor.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import SideFrame from '@/components/molucules/SideFrame'
import { useMissionState } from '@/redux/missions/selectors';

interface PROPS {
  className: string
  emitQuery: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Monitor: VFC<PROPS> = ({
  className,
  emitQuery
}) => {

  const state = useMissionState().mission

  return (
    <SideFrame className={`${ className } ${ state.isEmphasize['monitor'] ? animations.emphasize : ''}`} >
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
