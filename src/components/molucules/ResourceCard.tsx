import React, { ReactNode, VFC } from 'react'
import Paper from '@/components/atoms/Paper'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import BoltIcon from '@mui/icons-material/Bolt';
import styles from '@/styles/components/molucules/ResourceCard.module.scss'

interface PROPS {
  type: 'oil' | 'ice' | 'food' | 'wood' | 'power',
  amount: number
}

const ResourceCard: VFC<PROPS> = ({
  type,
  amount 
}) => {
  const icon =  function(): ReactNode {
    switch (type) {
      case 'oil':
        return <InvertColorsIcon color='primary' sx={{fontSize: '50px'}} />
      case 'ice':
        return <AcUnitIcon color='primary' sx={{fontSize: '50px'}} />
      case 'food':
        return <FastfoodIcon color='primary' sx={{fontSize: '50px'}} />
      case 'wood':
        return <BubbleChartIcon color='primary' sx={{fontSize: '50px'}} />
      case 'power':
        return <BoltIcon color='primary' sx={{fontSize: '50px'}} />
    }
  }

  return (
    <Paper className={ styles.paper } square >
      { icon() }
      { amount }
    </Paper>
  )
}

export default ResourceCard
