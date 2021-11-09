import React, { ReactNode, VFC } from 'react';
import { Button as MUIBtn } from '@mui/material';

interface PROPS {
  children: ReactNode,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  className?: string,
}

const Button: VFC<PROPS> = ({
  children,
  color = 'primary',
  size = 'medium',
  className
}) => {
return (
    <MUIBtn
      variant="contained"
      color={ color }
      size={ size }
      className={className}
    >
      { children }
    </MUIBtn>
)}

export default Button
