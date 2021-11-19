import TableEntity from '@/types/TableEntity';
import React, { useState, VFC } from 'react'
import SpaceWood from '../molucules/SpaceWood';
import styles from '@/styles/components/organisms/InteractiveSpaceWood.module.scss'
import ArchitectureWindow from './ArchitectWindow';

interface PROPS {
  entity: TableEntity,
  isSqlMode: boolean,
  setIsSqlMode: (boolean) => void,
  setShowCrossSection: (boolean) => void
}

const InteractiveSpaceWood: VFC<PROPS> = ({
  entity,
  isSqlMode,
  setIsSqlMode,
  setShowCrossSection
}) => {

  const [ focusFlg, setFocusFlg ] = useState(false);
  const focus = () => setFocusFlg(true)

  const openTable = () => {
    setShowCrossSection(true)
    setIsSqlMode(true)
  }

  const closeTable = () => {
    setShowCrossSection(false)
    setIsSqlMode(false)
  }

  const clickaway = () => {
    // setFocusFlg(false)
    // endSQL()
  }

  return (
    <div className={`${ styles['interactive-space-wood'] } ${ isSqlMode ? styles['sql-mode'] : '' }`}>
      <SpaceWood onFocus={ focus } hidden={ isSqlMode }/>
      { 
        focusFlg && <ArchitectureWindow
          title='SpaceTree'
          btnLabel='get resource'
          className={ styles.table }
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

export default InteractiveSpaceWood
