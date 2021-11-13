import { Typography } from '@mui/material'
import React, { ReactNode, VFC } from 'react'
import styles from '@/styles/components/atoms/H4.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const H5: VFC<PROPS> = ({
  children,
  className
}) => (
  <Typography
    variant='h5'
    className={`${className} ${styles.h5}`}
  >
    { children }
  </Typography>
)

export default H5