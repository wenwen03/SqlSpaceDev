import React, { useState, VFC } from 'react'
import Residence from '../molucules/Residence'
import ArchitectureWindow from './ArchitectWindow'
import styles from '@/styles/components/organisms/InteractiveResidence.module.scss'
import TableEntity from '@/types/TableEntity'

interface PROPS {
  entity: TableEntity,
  setIsSqlMode: (boolean) => void
}

const InteractiveResidence: VFC<PROPS> = ({
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
          title='Residence'
          btnLabel='create room'
          setIsSqlMode={ setIsSqlMode }
          entity={ entity }
          clickaway={ clickaway } 
        />
      }
    </div>
  )
 }

export default InteractiveResidence
