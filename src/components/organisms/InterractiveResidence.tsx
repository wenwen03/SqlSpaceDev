import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ResidenceWindow from './ResidenceWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'
import ResidenceEntity from '@/types/ResidenceEntity'
import missionSlice from '@/redux/missions/slice'
import { useDispatch } from 'react-redux'

interface PROPS {
  startSQL: () => void
  endSQL: () => void,
  entity: ResidenceEntity
}

const InterractiveResidence: VFC<PROPS> = ({
  startSQL,
  endSQL,
  entity
}) => { 

  const dispatch = useDispatch()
  const [ focusFlg, setFocusFlg ] = useState(false);
  const focus = () => {
    setFocusFlg(true)
    dispatch(missionSlice.actions.nextStep('InteractiveResidence'))
  }
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
          startSQL={ startSQL } 
          endSQL={ endSQL } 
          clickaway={ clickaway } 
        />
      }
    </div>
  )
 }

export default InterractiveResidence
