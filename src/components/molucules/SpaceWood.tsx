import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Architecture.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'
import { useMissionState } from '@/redux/missions/selectors'

interface PROPS {
  onFocus: () => void,
  hidden: boolean
}

const SpaceWood: VFC<PROPS> = ({
  onFocus,
  hidden
}) => {

  const state = useMissionState().mission

  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(missionSlice.actions.nextStep('spaceWood'))
    onFocus()
  }

  return (
    <MyImg
      onClick={ onClick }
      src='/img/resources/space-wood.svg'
      alt='Space Wood'
      className={`
        ${ styles.architecture } 
        ${ state.isEmphasize['spaceWood'] ? animations.emphasize : '' }
        ${ hidden ? styles.hidden : ''}
      `}
      width={ 200 }
      height={ 200 }
    />
  )
}

export default SpaceWood
