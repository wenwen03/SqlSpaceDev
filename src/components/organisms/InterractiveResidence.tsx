import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ResidenceWindow from './ResidenceWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'

interface PROPS {
  startSQL: () => void
  endSQL: () => void
}

const InterractiveResidence: VFC<PROPS> = ({
  startSQL,
  endSQL
}) => { 

  const [ focusFlg, setFocusFlg ] = useState(false);
  const focus = () => {
    setFocusFlg(true)
  }
  const clickaway = () => {
    // setFocusFlg(false)
    // endSQL()
  }

  return (
    <div className={ styles['interactive-residence'] }>
      <Residence focusFunc={ focus }/>
      { focusFlg && <ResidenceWindow startSQL={ startSQL } endSQL={ endSQL } clickaway={ clickaway } /> }
    </div>
  )
 }

export default InterractiveResidence
