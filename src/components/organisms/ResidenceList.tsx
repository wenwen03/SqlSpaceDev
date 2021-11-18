import { useMissionState } from '@/redux/missions/selectors'
import React, { VFC } from 'react'
import InteractiveResidence from './InteractiveResidence'

interface PROPS {
  setIsSqlMode: (boolean) => void
}

const ResidenceList: VFC<PROPS> = ({
  setIsSqlMode
}) => {

  const state = useMissionState().mission

  return (
    <>
      {
        state.residenceList.map(( residence, index ) => 
          <InteractiveResidence 
            key={ index }
            entity={ residence }
            setIsSqlMode={ setIsSqlMode }
          />
        )
      }
    </>
  )
}

export default ResidenceList
