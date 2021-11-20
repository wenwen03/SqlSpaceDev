import Layout from '@/components/templates/Layout'
import React, { VFC } from 'react'
import styles from '@/styles/pages/home.module.scss'
import NameLabel from '@/components/molucules/NameLabel'
import SkillTree from '@/components/organisms/SkillTree'
import MissionCard from '@/components/molucules/MissionCard'
import MissionDesc from '@/components/organisms/MissionDesc'
import { useMissionState } from '@/redux/missions/selectors'
import MissionMap from '@/scenarios/MissionMap'
import { Mission } from '@/types/Mission'

const Home: VFC = () => {

  const state = useMissionState().mission
  const targetMission: Mission = MissionMap[state.missionName]

  return (
    <Layout
      title='HOME | SQL Space Dev'
      wholeClass={ styles.home }
      mainClass={ styles.main}
    >
      <NameLabel className={ styles['name-label'] }/>
      <SkillTree className={ styles['skill-tree'] }/>
      <MissionDesc className={ styles['mission-desc']} />
      <MissionCard
        className={ styles['mission-card'] }
        title={ targetMission.title }
        description={ targetMission.description }
        purposes={ targetMission.purposes }
      />
    </Layout>
  )
}

export default Home
