import React, { ReactNode, VFC } from 'react';
import { Button as MUIBtn } from '@mui/material';

interface PROPS {
  children: ReactNode,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large'
}

const Button: VFC<PROPS> = ({
  children,
  color = 'primary',
  size = 'medium'
}) => {
return (
    <MUIBtn variant="contained" color={ color } size={ size } >
      { children }
    </MUIBtn>
)}

export default Button
