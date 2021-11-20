import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ArchitectureWindow from './ArchitectWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'
import ResidenceEntity from '@/types/ResidenceEntity'

interface PROPS {
  isSqlMode: boolean,
  entity: ResidenceEntity,
  setIsSqlMode: (boolean) => void
}

const InteractiveResidence: VFC<PROPS> = ({
  isSqlMode,
  entity,
  setIsSqlMode
}) => { 

  const [ isFocus, setIsFocus] = useState(false);
  const focus = () => setIsFocus(true)
  const unfocus = () => isSqlMode ? void(0) : setIsFocus(false)

  const openTable = () => setIsSqlMode(true)
  const closeTable = () => setIsSqlMode(false)

  return (
    <div className={ styles['interactive-residence'] }>
      <Residence focusFunc={ focus }/>
      { 
        isFocus && <ArchitectureWindow
          title='Residence'
          btnLabel='create room'
          isSqlMode={ isSqlMode }
          openTable={ openTable }
          closeTable={ closeTable }
          entity={ entity }
          clickaway={ unfocus }
        />
      }
    </div>
  )
 }

export default InteractiveResidence
