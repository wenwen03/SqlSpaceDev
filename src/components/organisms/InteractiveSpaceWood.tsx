import TableEntity from '@/types/TableEntity';
import React, { useState, VFC } from 'react'
import SpaceWood from '../molucules/SpaceWood';
import styles from '@/styles/components/organisms/InteractiveSpaceWood.module.scss'
import ArchitectureWindow from './ArchitectWindow';

interface PROPS {
  entity: TableEntity,
  setIsSqlMode: (boolean) => void
}

const InteractiveSpaceWood: VFC<PROPS> = ({
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
    <div className={ styles['interactive-space-wood'] }>
      <SpaceWood onFocus={ focus }/>
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

export default InteractiveSpaceWood
