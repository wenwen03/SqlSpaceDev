import { Typography } from '@mui/material'
import React, { ReactNode, VFC } from 'react'
import styles from '@/styles/components/atoms/H4.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const H4: VFC<PROPS> = ({
  children,
  className
}) => (
  <Typography
    variant='h4'
    className={`${className} ${styles.h4}`}
  >
    { children }
  </Typography>
)

export default H4

