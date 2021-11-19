import TableEntity from '@/types/TableEntity';
import React, { useState, VFC } from 'react'
import SpaceWood from '../molucules/SpaceWood';
import styles from '@/styles/components/organisms/InteractiveSpaceWood.module.scss'
import ResourceWindow from './ResourceWindow';

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

  const [ isFocus, setIsFocus] = useState(false);
  const focus = () => setIsFocus(true)
  const unfocus = () => isSqlMode ? void(0) : setIsFocus(false)

  const openTable = () => {
    setShowCrossSection(true)
    setIsSqlMode(true)
  }

  const closeTable = () => {
    setShowCrossSection(false)
    setIsSqlMode(false)
  }

  return (
    <div className={`${ styles['interactive-space-wood'] } ${ isSqlMode ? styles['sql-mode'] : '' }`}>
      <SpaceWood onFocus={ focus } hidden={ isSqlMode }/>
      { 
        isFocus && <ResourceWindow
          title='SpaceTree'
          btnLabel='get resource'
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

export default InteractiveSpaceWood
