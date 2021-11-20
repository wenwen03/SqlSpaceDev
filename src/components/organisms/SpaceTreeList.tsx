import { useMissionState } from '@/redux/missions/selectors'
import React, { VFC } from 'react'
import InteractiveSpaceTree from './InteractiveSpaceTree'

interface PROPS {
  setIsSqlMode: (boolean) => void,
  setShowCrossSection: (boolean) => void,
  isSqlMode: boolean
}

const SpaceTreeList: VFC<PROPS> = ({
  setIsSqlMode,
  setShowCrossSection,
  isSqlMode
}) => {

  const state = useMissionState().mission

  return (
    <>
      {
        state.spaceTreeList.map(( wood, index ) => 
          <InteractiveSpaceTree
            key={ index }
            entity={ wood }
            isSqlMode={ isSqlMode }
            setIsSqlMode={ setIsSqlMode }
            setShowCrossSection={ setShowCrossSection }
          />
        )
      }
    </>
  )
}
export default SpaceTreeList
