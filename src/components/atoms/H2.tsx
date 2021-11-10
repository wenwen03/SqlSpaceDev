import React, { ReactNode } from 'react'
import { VFC } from 'react'
import styles from '@/styles/components/atoms/H2.module.scss'
import { Typography } from '@mui/material'

interface PROPS {
  children: ReactNode,
  className?: string
}

const H2: VFC<PROPS> = ({
  children,
  className
}) => (
  <Typography variant='h2' className={`${className} ${styles.h2}`}>
    { children }
  </Typography>
)

export default H2
