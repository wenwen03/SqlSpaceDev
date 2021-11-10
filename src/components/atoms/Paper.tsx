import React, { ReactNode, VFC } from 'react'
import MUIPaper from '@mui/material/Paper';
import styles from '@/styles/components/atoms/Paper.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string,
  variant?: 'elevation' | 'outlined'
}
const Paper: VFC<PROPS> = ({
  children,
  className,
  variant = 'elevation'
}) => ( 
  <MUIPaper
    className={`${className} ${styles.paper}`}
    variant={variant}>
    { children }
  </MUIPaper>
)

export default Paper
