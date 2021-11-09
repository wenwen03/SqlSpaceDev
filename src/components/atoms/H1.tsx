import React, { ReactNode } from 'react'
import { VFC } from 'react'
import styles from '@/styles/components/atoms/H1.module.scss';

interface PROPS {
  children: ReactNode,
  className?: string
}

const H1: VFC<PROPS> = ({
  children,
  className 
}) => <h1 className={`${ className } ${ styles.h1 }`}>{ children }</h1>

export default H1
