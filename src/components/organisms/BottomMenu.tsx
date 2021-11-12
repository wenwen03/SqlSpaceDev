import React, { VFC } from 'react'
import styles from '@/styles/components/organisms/BottomMenu.module.scss'
import ResourceBar from './ResourceBar'
import CreateBtn from '../molucules/CreateBtn'

const BottomMenu: VFC = () => {
  return (
    <div className={ styles['bottom-menu'] }>
      <ResourceBar />
      <CreateBtn />
    </div>
  )
}

export default BottomMenu
