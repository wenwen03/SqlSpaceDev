import React, { ReactNode, VFC } from 'react'
import MUIPaper from '@mui/material/Paper';
import styles from '@/styles/components/atoms/Paper.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string,
  variant?: 'elevation' | 'outlined',
  elevation?: number,
  square?: boolean
}
const Paper: VFC<PROPS> = ({
  children,
  className,
  variant = 'elevation',
  elevation = 0,
  square = false
}) => ( 
  <MUIPaper
    className={`${className} ${styles.paper}`}
    elevation={ elevation}
    variant={variant}
    square={ square }
  >
    { children }
  </MUIPaper>
)

export default Paper
