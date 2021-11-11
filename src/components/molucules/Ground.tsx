import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Ground.module.scss'

interface PROPS {
  className?: string
}

const Ground: VFC<PROPS> = () => (
  <MyImg
    src='/img/others/planet.svg'
    className={ styles.ground }
    alt='planet'
    width={1440}
    height={800}
  />
)

export default Ground
