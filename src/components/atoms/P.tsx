import React, { ReactNode } from 'react'
import { VFC } from 'react'
import styles from '@/styles/components/atoms/P.module.scss'
import { Typography } from '@mui/material'

interface PROPS {
  children: ReactNode,
  className?: string
}

const P: VFC<PROPS> = ({
  children,
  className
}) => (
  <Typography variant='body1' className={`${className} ${styles.p}`}>
    { children }
  </Typography>
)

export default P
