import React, { ReactNode, VFC } from 'react'
import MyImg from '../atoms/MyImg'
import styles from '@/styles/components/molucules/WindowFrame.module.scss'
import { style } from '@mui/system'

interface PROPS {
  className?: string,
  children: ReactNode
}

const WindowFrame:VFC<PROPS> = ({
  className,
  children
}) => (
  <div className={`${ className } ${ styles['window-frame'] }`}>
    <MyImg src='/img/others/upper-frame.svg' className={ styles.frame }/>
    { children }
    <MyImg src='/img/others/bottom-frame.svg' className={ styles.frame }/>
  </div>
)

export default WindowFrame
