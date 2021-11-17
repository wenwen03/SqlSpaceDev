import React, { ReactNode, VFC } from 'react';
import { Button as MUIBtn } from '@mui/material';
import styles from '@/styles/components/animations/Emphasize.module.scss';
import { useMissionState } from '@/redux/missions/selectors';
import { useDispatch } from 'react-redux';
import missionSlice from '@/redux/missions/slice';

interface PROPS {
  children: ReactNode,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  className?: string,
  onClick: () => void,
  startIcon?: ReactNode,
  name?: string
}

const Button: VFC<PROPS> = ({
  children,
  color = 'primary',
  size = 'medium',
  className,
  onClick,
  startIcon,
  name
}) => {

  const state = useMissionState().mission
  const dispatch = useDispatch()

  const btnClick = () => {
    onClick()
    name ? dispatch(missionSlice.actions.nextStep(name)) : void(0)
  }

  return (
    <MUIBtn
      variant="contained"
      color={ color }
      size={ size }
      className={`${ className } ${ state.isEmphasize[name] ? styles.emphasize : '' }`}
      onClick={ btnClick }
      startIcon={ startIcon }
    >
      { children }
    </MUIBtn>
)}

export default Button
