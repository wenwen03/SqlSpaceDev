import { ReactNode, VFC } from 'react'
import styles from "@/styles/components/templates/Layout.module.scss"
import Head from 'next/head'
import Navbar from '../organisms/Navbar'
import { useDispatch } from 'react-redux'
import missionSlice from '@/redux/missions/slice'

interface PROPS {
  children: ReactNode,
  title: string,
  wholeClass?: string,
  mainClass?: string
};

const Layout: VFC<PROPS> = ({
  children,
  title,
  wholeClass,
  mainClass
}) => {

  const dispatch = useDispatch()
  const onClick = () => dispatch(missionSlice.actions.nextStep('main'))

  return (
    <div className={`${ wholeClass } ${ styles.layout }`}>
      <Head>
        <title>{ title }</title>
      </Head>
      <header className={ styles.header }>
        <Navbar/>
      </header>
      <main 
        className={`${ mainClass } ${ styles.main }`}
        onClick={ onClick }
      >
        { children }
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout;