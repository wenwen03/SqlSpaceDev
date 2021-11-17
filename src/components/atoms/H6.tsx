import { Typography } from '@mui/material'
import React, { ReactNode, VFC } from 'react'
import styles from '@/styles/components/atoms/H4.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const H6: VFC<PROPS> = ({
  children,
  className
}) => (
  <Typography
    variant='h6'
    className={`${className} ${styles.h6}`}
  >
    { children }
  </Typography>
)

export default H6