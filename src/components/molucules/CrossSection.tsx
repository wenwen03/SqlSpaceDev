import React, { VFC } from 'react'
import MyImg from '../atoms/MyImg'
import styles from '@/styles/components/molucules/CrossSection.module.scss'

const CrossSection: VFC = () => (
  <MyImg 
    className={ styles['cross-section'] }
    src='/img/resources/space-tree-ground.svg'
    alt='cross section image'
  />
)

export default CrossSection
