import { Typography } from '@mui/material'
import React, { ReactNode, VFC } from 'react'
import styles from '@/styles/components/atoms/H3.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const H3: VFC<PROPS> = ({
  children,
  className
}) => (
  <Typography
    variant='h3'
    className={`${className} ${styles.h3}`}
  >
    { children }
  </Typography>
)

export default H3
