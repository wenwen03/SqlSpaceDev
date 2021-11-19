import { useMissionState } from '@/redux/missions/selectors'
import React, { VFC } from 'react'
import InteractiveResidence from './InteractiveResidence'

interface PROPS {
  isSqlMode: boolean,
  setIsSqlMode: (boolean) => void
}

const ResidenceList: VFC<PROPS> = ({
  isSqlMode,
  setIsSqlMode
}) => {

  const state = useMissionState().mission

  return (
    <>
      {
        state.residenceList.map(( residence, index ) => 
          <InteractiveResidence 
            key={ index }
            isSqlMode={ isSqlMode }
            entity={ residence }
            setIsSqlMode={ setIsSqlMode }
          />
        )
      }
    </>
  )
}

export default ResidenceList
