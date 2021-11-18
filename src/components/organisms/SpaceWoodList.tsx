import { useMissionState } from '@/redux/missions/selectors'
import React, { VFC } from 'react'
import InteractiveSpaceWood from './InteractiveSpaceWood'

interface PROPS {
  setIsSqlMode: (boolean) => void
}

const SpaceWoodList: VFC<PROPS> = ({
  setIsSqlMode
}) => {

  const state = useMissionState().mission

  return (
    <>
      {
        state.spaceWoodList.map(( wood, index ) => 
          <InteractiveSpaceWood
            key={ index }
            entity={ wood }
            setIsSqlMode={ setIsSqlMode }
          />
        )
      }
    </>
  )
}
export default SpaceWoodList
