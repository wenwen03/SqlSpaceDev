import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Architecture.module.scss'

const Residence: VFC = () => (
  <MyImg
    src='/img/architectures/residence.svg'
    alt='residence'
    className={ styles.architecture }
    width={ 300 }
    height={ 200 }
  />
)

export default Residence
