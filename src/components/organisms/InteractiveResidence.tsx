import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ArchitectureWindow from './ArchitectWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'
import TableEntity from '@/types/TableEntity'

interface PROPS {
  isSqlMode: boolean,
  entity: TableEntity,
  setIsSqlMode: (boolean) => void
}

const InteractiveResidence: VFC<PROPS> = ({
  isSqlMode,
  entity,
  setIsSqlMode
}) => { 

  const [ focusFlg, setFocusFlg ] = useState(false);
  const focus = () => setFocusFlg(true)

  const clickaway = () => {
    // setFocusFlg(false)
    // endSQL()
  }

  const openTable = () => setIsSqlMode(true)
  const closeTable = () => setIsSqlMode(false)

  return (
    <div className={ styles['interactive-residence'] }>
      <Residence focusFunc={ focus }/>
      { 
        focusFlg && <ArchitectureWindow
          title='Residence'
          btnLabel='create room'
          isSqlMode={ isSqlMode }
          openTable={ openTable }
          closeTable={ closeTable }
          entity={ entity }
          clickaway={ clickaway } 
        />
      }
    </div>
  )
 }

export default InteractiveResidence
