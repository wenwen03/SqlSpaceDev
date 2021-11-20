import React, { VFC } from 'react'
import Bubble from '@/components/molucules/Bubble'
import Image from 'next/image'
import styles from '@/styles/components/organisms/MissionDesc.module.scss'
import { useMissionState } from '@/redux/missions/selectors'
import MissionMap from '@/scenarios/MissionMap'

interface PROPS {
  className: string
}

const MissionDesc: VFC<PROPS> = ({
  className
}) => {
  const state = useMissionState().mission
  const imgPath = MissionMap[state.missionName].imgPath
  return (
    <div className={ `${ styles['mission-desc'] } ${ className }`}>
      <Image className={ styles.img } src={ imgPath } width={400} height={300}/>
    </div>
  )
}
export default MissionDesc
