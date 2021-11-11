import React, { VFC } from 'react'
import H2 from '../atoms/H2'
import LevelLabel from './LevelLabel'
import styles from '@/styles/components/molucules/NameLabel.module.scss'

interface PROPS {
  className: string
}

const NameLabel: VFC<PROPS> = ({
  className
}) => (
  <div className={`${ className } ${styles['name-label']}`}>
    <H2>Test User</H2>
    <LevelLabel level={1}/>
  </div>
)

export default NameLabel