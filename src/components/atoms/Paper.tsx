import React, { ReactNode, VFC } from 'react'
import MUIPaper from '@mui/material/Paper';
import styles from '@/styles/components/atoms/Paper.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string,
  variant?: 'elevation' | 'outlined',
  elevation?: number
}
const Paper: VFC<PROPS> = ({
  children,
  className,
  variant = 'elevation',
  elevation = 0
}) => ( 
  <MUIPaper
    className={`${className} ${styles.paper}`}
    elevation={ elevation}
    variant={variant}>
    { children }
  </MUIPaper>
)

export default Paper
