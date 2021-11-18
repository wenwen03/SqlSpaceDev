import Head from 'next/head'
import React, { ReactNode, VFC } from 'react'
import Ground from '../molucules/Ground'
import StarSky from '../molucules/StarSky'
import styles from '@/styles/components/templates/Mission.module.scss'
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'

interface PROPS {
  children: ReactNode
  title: string,
  wholeClass?: string,
  mainClass?: string
}

const Mission:VFC<PROPS> = ({
  children,
  title,
  wholeClass,
  mainClass
}) => {

  const dispatch = useDispatch()
  const onClick = () => dispatch(missionSlice.actions.nextStep('main'))

  return ( 
    <div className={`${ wholeClass } ${ styles.mission }`}>
      <Head>
        <title>{ title }</title>
      </Head>
      <header className={ styles.header }>
      </header>
      <main 
        className={`${ mainClass } ${ styles.main }`}
        onClick={ onClick }
      >
        <StarSky/>
        <Ground />
        { children }
      </main>
    </div>
  )
}

export default Mission
