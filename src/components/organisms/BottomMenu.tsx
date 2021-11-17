import React, { VFC } from 'react'
import styles from '@/styles/components/organisms/BottomMenu.module.scss'
import ResourceBar from './ResourceBar'
import CreateBtn from '../molucules/CreateBtn'
import { useMissionState } from '@/redux/missions/selectors'

const BottomMenu: VFC = () => {

  const state = useMissionState().mission

  return  !state.isSqlMode && (
    <div className={ styles['bottom-menu'] }>
      <ResourceBar />
      <CreateBtn />
    </div>
  )
}

export default BottomMenu
