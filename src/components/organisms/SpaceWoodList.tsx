import { useMissionState } from '@/redux/missions/selectors'
import React, { VFC } from 'react'
import InteractiveSpaceWood from './InteractiveSpaceWood'

interface PROPS {
  setIsSqlMode: (boolean) => void,
  setShowCrossSection: (boolean) => void,
  isSqlMode: boolean
}

const SpaceWoodList: VFC<PROPS> = ({
  setIsSqlMode,
  setShowCrossSection,
  isSqlMode
}) => {

  const state = useMissionState().mission

  return (
    <>
      {
        state.spaceWoodList.map(( wood, index ) => 
          <InteractiveSpaceWood
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
export default SpaceWoodList
