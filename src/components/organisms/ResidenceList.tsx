import { useMissionState } from '@/redux/missions/selectors'
import React, { VFC } from 'react'
import InterractiveResidence from './InterractiveResidence'

const ResidenceList: VFC = () => {

  const state = useMissionState().mission

  return (
    <>
      {
        state.residenceList.map(( residence, index ) => 
          <InterractiveResidence 
            key={ index }
            entity={ residence }
          />
        )
      }
    </>
  )
}

export default ResidenceList
