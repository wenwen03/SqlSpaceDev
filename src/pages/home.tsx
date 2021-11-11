import Layout from '@/components/templates/Layout'
import React, { VFC } from 'react'
import styles from '@/styles/pages/home.module.scss'
import NameLabel from '@/components/molucules/NameLabel'
import SkillTree from '@/components/organisms/SkillTree'
import MissionCard from '@/components/molucules/MissionCard'
import MissionDesc from '@/components/organisms/MissionDesc'

const home: VFC = () => {
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
        title='INSERT文の基本を学ぼう'
        description={`
          この会社には研修がなく、教育制度が整っていないみたい。\n
          テキトーに応募したのがよくなかったね！\n\n
          このミッションでは、SQLができることなどを実際にSQLを使用しながら\n
          学んでいきます。SQLマスターの第一歩を踏み出そう！
        `}
        purposes={['SQLとは何かを理解する', 'SQLでできることを理解する']}
      />
    </Layout>
  )
}

export default home
