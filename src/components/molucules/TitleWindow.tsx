import React, { VFC } from 'react'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import P from '../atoms/P'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import styles from '@/styles/components/molucules/TitleWindow.module.scss'
import H3 from '../atoms/H3'

interface PROPS {
  current: number,
  max: number
}
const TitleWindow: VFC<PROPS> = ({
  current,
  max,
}) => {
  const create = function(): void {
    console.log('create')
  }

  return (
    <Card className={ styles['title-window']}>
      <H3>Residence</H3>
      <P>部屋数 { current } / { max }</P>
      <Button 
        onClick={ create } 
        startIcon={ <ControlPointIcon/> }
      >
        create room
      </Button>
    </Card>
  )
}

export default TitleWindow
