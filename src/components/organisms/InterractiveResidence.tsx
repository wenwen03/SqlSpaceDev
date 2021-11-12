import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ResidenceWindow from './ResidenceWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'

interface PROPS {
}

const InterractiveResidence: VFC<PROPS> = () => { 

  const [ focusFlg, setFocusFlg ] = useState(false);
  const focus = () => setFocusFlg(pre => !pre)
  const clickaway = () => setFocusFlg(false)

  return (
    <div className={ styles['interactive-residence'] }>
      <Residence focusFunc={ focus }/>
      { focusFlg && <ResidenceWindow clickaway={ clickaway } /> }
    </div>
  )
 }

export default InterractiveResidence
