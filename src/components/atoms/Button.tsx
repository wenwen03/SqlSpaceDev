import React, { ReactNode, VFC } from 'react';
import { Button as MUIBtn } from '@mui/material';
import styles from '@/styles/components/atoms/Button.module.scss'

interface PROPS {
  children: ReactNode,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  className?: string,
  onClick: () => void,
  startIcon?: ReactNode,
  isEmphasize?: boolean
}

const Button: VFC<PROPS> = ({
  children,
  color = 'primary',
  size = 'medium',
  className,
  onClick,
  startIcon,
  isEmphasize = false
}) => {
return (
    <MUIBtn
      variant="contained"
      color={ color }
      size={ size }
      className={`${ className } ${ isEmphasize ? styles.emphasize : '' }`}
      onClick={onClick}
      startIcon={ startIcon }
    >
      { children }
    </MUIBtn>
)}

export default Button
