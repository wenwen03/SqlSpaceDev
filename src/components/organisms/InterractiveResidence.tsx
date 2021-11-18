import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ArchitectureWindow from './ArchitectWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'
import ResidenceEntity from '@/types/ResidenceEntity'

interface PROPS {
  entity: ResidenceEntity,
  setIsSqlMode: (boolean) => void
}

const InterractiveResidence: VFC<PROPS> = ({
  entity,
  setIsSqlMode
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
        focusFlg && <ArchitectureWindow
          setIsSqlMode={ setIsSqlMode }
          entity={ entity }
          clickaway={ clickaway } 
        />
      }
    </div>
  )
 }

export default InterractiveResidence
