import React, { ReactNode, VFC } from 'react'
import MyImg from '../atoms/MyImg'
import styles from '@/styles/components/molucules/WindowFrame.module.scss'
import { Box, ClickAwayListener } from '@mui/material'

interface PROPS {
  className?: string,
  children: ReactNode,
  clickaway: () => void
}

const WindowFrame:VFC<PROPS> = ({
  className,
  children,
  clickaway
}) => (
  <ClickAwayListener onClickAway={ clickaway }>
    <Box className={ className }>
      <MyImg src='/img/others/upper-frame.svg' className={ styles.frame }/>
      { children }
      <MyImg src='/img/others/bottom-frame.svg' className={ styles.frame }/>
    </Box>
  </ClickAwayListener>
)

export default WindowFrame
