import React, { ReactNode, VFC } from 'react'
import MUIChip from '@mui/material/Chip';

interface PROPS {
  label?: ReactNode,
  className?: string,
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  variant?: 'filled' | 'outlined',
  size?: 'small' | 'medium'
}

const Chip: VFC<PROPS> = ({
  label,
  className,
  color = 'primary',
  variant = 'outlined',
  size = 'medium'
}) => <MUIChip className={ className } label={ label } color={ color } variant={ variant } size={ size }/>

export default Chip
