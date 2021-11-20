import { Grid } from '@mui/material'
import React, { VFC } from 'react'
import Circle from '../atoms/Circle'
import styles from '@/styles/components/molucules/SkillCircle.module.scss'
import { useMissionState } from '@/redux/missions/selectors'

interface PROPS {
  skillName?: string,
  status?: 'locked' | 'available' | 'completed',
  onClick: () => void
}

const SkillCircle: VFC<PROPS> = ({
  skillName,
  status = 'locked',
  onClick
}) => {
  const state = useMissionState().mission
  const selectedClass = state.missionName === skillName ? styles.selected : ''

  return skillName ? (
    <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}} onClick={ onClick }>
      <Circle className={`${ styles[status] } ${ selectedClass }`}>
        { skillName }
      </Circle>
    </Grid>
  ) : (
    <Grid item xs={2} onClick={ onClick }>
    </Grid>
  )
}

export default SkillCircle
