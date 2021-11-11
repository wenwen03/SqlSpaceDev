import React, { ReactNode, VFC } from 'react'
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

interface PROPS {
  children: ReactNode,
  variant?: 'elevation' | 'outlined',
  className: string
}

const Card: VFC<PROPS> = ({
  children,
  variant = 'outlined',
  className
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
    <CardContent>
      { children}
    </CardContent>
  </MUICard>
)

export default Card
