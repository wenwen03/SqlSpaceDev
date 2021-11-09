import React from 'react'
import styles from '@/styles/components/molucules/Title.module.scss'
import H1 from '../atoms/H1'
import H2 from '../atoms/H2'

const Title = () => {
  return (
    <>
      <H1 className={`${styles.common} ${styles.title}`}>SQL<br/>Space Dev</H1>
      <H2 className={`${styles.common} ${styles.subtitle}`}>Learning SQL with Game</H2>
    </>
  )
}

export default Title