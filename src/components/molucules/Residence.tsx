import React, { VFC } from 'react'
import MyImg from '@/components/atoms/MyImg'
import styles from '@/styles/components/molucules/Architecture.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'
import { useMissionState } from '@/redux/missions/selectors';

interface PROPS {
  focusFunc: () => void
}

const Residence: VFC<PROPS> = ({
  focusFunc
}) => {

  const state = useMissionState().mission

  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(missionSlice.actions.nextStep('residence'))
    focusFunc()
  }

  return (
    <MyImg
      src='/img/architectures/residence.svg'
      alt='residence'
      onClick={ onClick }
      className={`${ styles.architecture } ${ state.isEmphasize['residence'] ? animations.emphasize : '' }`}
      width={ 300 }
      height={ 200 }
    />
  )
}

export default Residence
