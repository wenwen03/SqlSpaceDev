import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Architecture.module.scss'
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'

interface PROPS {
  onFocus: () => void
}

const SpaceWood: VFC<PROPS> = ({
  onFocus
}) => {

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
      className={ styles.architecture }
      width={ 200 }
      height={ 200 }
    />
  )
}

export default SpaceWood
