import React, { ReactNode, VFC } from 'react'
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

interface PROPS {
  contents: ReactNode,
  actions: ReactNode,
  variant?: 'elevation' | 'outlined'
}

const Card: VFC<PROPS> = ({
  contents,
  actions,
  variant = 'outlined'
}) => ( 
  <MUICard
    variant={variant} 
    sx={{
      border: 'solid 1px yellow',
      background: 'black',
      color: 'white'
    }}
  >
    <CardContent>
      { contents }
    </CardContent>
    <CardActionArea>
      { actions }
    </CardActionArea>
  </MUICard>
)

export default Card
