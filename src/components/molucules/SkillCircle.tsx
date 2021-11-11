import { Grid } from '@mui/material'
import React, { VFC } from 'react'
import Circle from '../atoms/Circle'
import styles from '@/styles/components/molucules/SkillCircle.module.scss'

interface PROPS {
  skillName?: string,
  status?: 'locked' | 'available' | 'completed'
}

const SkillCircle: VFC<PROPS> = ({
  skillName,
  status = 'locked'
}) => {
  return skillName ? (
    <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
      <Circle className={styles[status]}>{ skillName }</Circle>
    </Grid>
  ) : (
    <Grid item xs={2}>
    </Grid>
  )
}

export default SkillCircle
