import React from 'react'
import H2 from '../atoms/H2'
import LevelLabel from './LevelLabel'
import styles from '@/styles/components/molucules/NameLabel.module.scss'
import P from '../atoms/P'

const NameLabel = () => (
  <div className={styles.nameLabel}>
    <H2>Test User</H2>
    <LevelLabel level={1}/>
  </div>
)

export default NameLabel