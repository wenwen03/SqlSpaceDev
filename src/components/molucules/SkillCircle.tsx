import { Grid } from '@mui/material'
import React, { VFC } from 'react'
import Circle from '../atoms/Circle'
import styles from '@/styles/components/molucules/SkillCircle.module.scss'

interface PROPS {
  skillName?: string,
}

const SkillCircle: VFC<PROPS> = ({
  skillName,
}) => {
  return skillName ? (
    <Grid item xs={4}>
      <Circle className={styles.skillCircle}>{ skillName }</Circle>
    </Grid>
  ) : (
    <Grid item xs={4}>
    </Grid>
  )
}

export default SkillCircle
