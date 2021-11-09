import React, { ReactNode } from 'react'
import { VFC } from 'react'
import styles from '@/styles/components/atoms/P.module.scss'

interface PROPS {
  children: ReactNode,
  className?: string
}

const P: VFC<PROPS> = ({
  children,
  className
}) => <p className={`${className} ${styles.p}`}>{ children }</p>

export default P
