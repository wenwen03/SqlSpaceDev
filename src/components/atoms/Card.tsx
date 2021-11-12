import React, { ReactNode, VFC } from 'react'
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface PROPS {
  children: ReactNode,
  variant?: 'elevation' | 'outlined',
  className?: string,
  noPadding?: boolean
}

const Card: VFC<PROPS> = ({
  children,
  variant = 'outlined',
  className,
  noPadding = false
}) => ( 
  <MUICard
    className={ className }
    variant={variant} 
    sx={{
      border: 'solid 1px #ecd37e',
      background: 'black',
      color: 'white'
    }}
  >
    <CardContent sx={{ padding: noPadding ? '0' : '' }}>
      { children}
    </CardContent>
  </MUICard>
)

export default Card
