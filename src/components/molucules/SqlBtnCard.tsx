import React, { VFC } from 'react'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import styles from '@/styles/components/molucules/SqlBtnCard.module.scss'

interface PROPS {
  className?: string,
  run: () => void
}

const SqlBtnCard: VFC<PROPS> = ({
  className,
  run
}) => {
  const hoge = () => console.log('hoge')
  return (
    <Card className={`${styles['sql-btn-card']} ${ className }` }>
      <div className={ styles['secondary-btns'] }>
        <Button
          onClick={ hoge }
          className={ styles['secondary-btn'] }
        >
          hint
        </Button>
        <Button
          onClick={ hoge }
          className={ styles['secondary-btn'] }
        >
          log
        </Button>
      </div>
      <Button 
        name='runBtn'
        onClick={ run }
        color='secondary' 
        startIcon={ <DirectionsRunIcon/> }
        className={ styles['run-btn'] }
      >
        run
      </Button>
    </Card>
  )
}

export default SqlBtnCard
