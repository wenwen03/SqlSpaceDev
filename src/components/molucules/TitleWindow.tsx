import React, { VFC } from 'react'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import P from '../atoms/P'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import styles from '@/styles/components/molucules/TitleWindow.module.scss'
import H3 from '../atoms/H3'

interface PROPS {
  current: number,
  max: number,
  onClick: () => void
}
const TitleWindow: VFC<PROPS> = ({
  current,
  max,
  onClick
}) => {

  return (
    <Card className={ styles['title-window']}>
      <H3>Residence</H3>
      <P>部屋数 { current } / { max }</P>
      <Button 
        onClick={ onClick } 
        startIcon={ <ControlPointIcon/> }
      >
        create room
      </Button>
    </Card>
  )
}

export default TitleWindow
