import { Grid } from '@mui/material'
import React, { VFC } from 'react'
import Circle from '../atoms/Circle'
import styles from '@/styles/components/molucules/SkillCircle.module.scss'

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
  return skillName ? (
    <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}} onClick={ onClick }>
      <Circle className={styles[status]}>{ skillName }</Circle>
    </Grid>
  ) : (
    <Grid item xs={2} onClick={ onClick }>
    </Grid>
  )
}

export default SkillCircle
