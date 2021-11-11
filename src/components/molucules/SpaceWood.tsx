import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Architecture.module.scss'

const SpaceWood: VFC = () => (
  <MyImg
    src='/img/resources/space-wood.svg'
    alt='Space Wood'
    className={ styles.architecture }
    width={ 200 }
    height={ 200 }
  />
)

export default SpaceWood
