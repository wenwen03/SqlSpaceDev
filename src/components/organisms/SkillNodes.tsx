import Grid from '@mui/material/Grid'
import React, { VFC } from 'react'
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'
import SkillCircle from '../molucules/SkillCircle'

const missions: Array<Mission> = [
  { name: null, status: 'locked'},
  { name: null, status: 'locked'},
  { name: null, status: 'locked'},
  { name: 'Basic', status: 'completed'},
  { name: null, status: 'locked'},
  { name: null, status: 'locked'},
  { name: null, status: 'locked'},
  { name: null, status: 'locked'},
  { name: 'Select', status: 'available'},
  { name: 'Insert', status: 'available'},
  { name: 'Delete', status: 'locked'},
  { name: 'Create', status: 'locked'},
  { name: null, status: 'locked'},
  { name: 'Where', status: 'locked'},
  { name: 'Undefined Null', status: 'locked'},
  { name: 'Update', status: 'locked'},
  { name: 'Bulk Command', status: 'locked'},
  { name: null, status: 'locked'},
  { name: 'Basic Function', status: 'locked'},
  { name: 'Ambiguous Search', status: 'locked'},
  { name: 'Range Search', status: 'locked'},
  { name: 'Group', status: 'locked'},
  { name: 'Arthmetic Operator', status: 'locked'},
  { name: 'Index', status: 'locked'},
  { name: 'Union Except Intersect', status: 'locked'},
  { name: 'Pagenation', status: 'locked'},
  { name: 'Aggregate Function', status: 'locked'},
  { name: 'Join', status: 'locked'},
  { name: 'Case', status: 'locked'},
  { name: 'Performance', status: 'locked'},
]

interface Mission {
  name?: string,
  status: MissionStatus
}

type MissionStatus = 'completed' | 'available' | 'locked'

interface PROPS {
  className 
}

const SkillNodes: VFC<PROPS> = ({
  className
}) => {
  const dispatch = useDispatch()
  const selectMission = function(name): () => void {
    return name ?
     () => dispatch(missionSlice.actions.setInitialState(name)) : () => void(0)
  } 

  return (
    <Grid
      container
      rowSpacing={1}
      justifyContent='center'
      alignItems='center'
      className={ className }
    >
      { missions.map(( mission, index ) => (
        <SkillCircle
          onClick={ selectMission(mission.name) }
          skillName={mission.name}
          status={mission.status}
          key={index}
        />
      ))}
    </Grid>
  )
}

export default SkillNodes
