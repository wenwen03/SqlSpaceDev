import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Architecture.module.scss'

interface PROPS {
  focusFunc: () => void
}

const Residence: VFC<PROPS> = ({
  focusFunc
}) => (
  <MyImg
    src='/img/architectures/residence.svg'
    alt='residence'
    onClick={ focusFunc }
    className={ styles.architecture }
    width={ 300 }
    height={ 200 }
  />
)

export default Residence
