import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ResidenceWindow from './ResidenceWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'
import ResidenceEntity from '@/types/ResidenceEntity'
import { useDispatch } from 'react-redux'

interface PROPS {
  entity: ResidenceEntity
}

const InterractiveResidence: VFC<PROPS> = ({
  entity
}) => { 

  const [ focusFlg, setFocusFlg ] = useState(false);
  const focus = () => setFocusFlg(true)

  const clickaway = () => {
    // setFocusFlg(false)
    // endSQL()
  }

  return (
    <div className={ styles['interactive-residence'] }>
      <Residence focusFunc={ focus }/>
      { 
        focusFlg && <ResidenceWindow
          entity={ entity }
          clickaway={ clickaway } 
        />
      }
    </div>
  )
 }

export default InterractiveResidence
