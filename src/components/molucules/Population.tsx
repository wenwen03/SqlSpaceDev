import { Paper } from '@mui/material'
import React, { VFC } from 'react'
import styles from '@/styles/components/molucules/Population.module.scss'
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import P from '../atoms/P';

interface PROPS {
  className?: string,
  current: number,
  max: number
}

const Population: VFC<PROPS> = ({
  className,
  current,
  max
}) => (
  <Paper className={`${ styles.population } ${ className }`} >
    <SupervisedUserCircleRoundedIcon color='primary' sx={{ fontSize: '50px'}} />
    <P className={ styles.text }>{ current } / { max }</P>
  </Paper>
)

export default Population
