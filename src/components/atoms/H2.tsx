import React, { ReactNode } from 'react'
import { VFC } from 'react'
import styles from '@/styles/components/atoms/H2.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const H2: VFC<PROPS> = ({
  children,
  className
}) => <h2 className={`${className} ${styles.h2}`}>{ children }</h2>

export default H2
