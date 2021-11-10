import React, { ReactNode, VFC } from 'react'
import MUIChip from '@mui/material/Chip';

interface PROPS {
  label?: ReactNode,
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  variant?: 'filled' | 'outlined',
  size?: 'small' | 'medium'
}

const Chip: VFC<PROPS> = ({
  label,
  color = 'primary',
  variant = 'outlined',
  size = 'medium'
}) => <MUIChip label={ label } color={ color } variant={ variant } size={ size }/>

export default Chip
