import React, { ReactNode } from 'react'
import { VFC } from 'react'
import styles from '@/styles/components/atoms/H1.module.scss';
import { Typography } from '@mui/material';

interface PROPS {
  children: ReactNode,
  className?: string
}

const H1: VFC<PROPS> = ({
  children,
  className 
}) => (
  <Typography variant='h1' className={`${ className } ${ styles.h1 }`}>
    { children }
  </Typography>
)

export default H1
