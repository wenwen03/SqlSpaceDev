import TableEntity from '@/types/TableEntity';
import React, { useState, VFC } from 'react'
import SpaceTree from '../molucules/SpaceTree';
import styles from '@/styles/components/organisms/InteractiveSpaceTree.module.scss'
import ResourceWindow from './ResourceWindow';
import SpaceTreeEntity from '@/types/SpaceTreeEntity';

interface PROPS {
  entity: SpaceTreeEntity,
  isSqlMode: boolean,
  setIsSqlMode: (boolean) => void,
  setShowCrossSection: (boolean) => void
}

const InteractiveSpaceTree: VFC<PROPS> = ({
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
    <div className={`${ styles['interactive-space-tree'] } ${ isSqlMode ? styles['sql-mode'] : '' }`}>
      <SpaceTree onFocus={ focus } hidden={ isSqlMode }/>
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

export default InteractiveSpaceTree
