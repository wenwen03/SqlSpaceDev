import React, { ReactNode, VFC } from 'react'
import MyImg from '../atoms/MyImg'
import styles from '@/styles/components/molucules/SideFrame.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const SideFrame: VFC<PROPS> = ({
  children,
  className
}) => {
  return (
    <div className={ `${styles['side-frame']} ${ className }` }>
      <MyImg src='/img/others/left-frame.svg' className={ styles.frame }/>
      { children }
      <MyImg src='/img/others/right-frame.svg' className={ styles.frame }/>
    </div>
      
  )
}

export default SideFrame;
