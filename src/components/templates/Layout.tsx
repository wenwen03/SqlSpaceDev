import { ReactNode, VFC } from 'react'
import styles from "@/styles/components/atoms/Layout.module.css"
import Head from 'next/head'
import Navbar from '../organisms/Navbar'

interface PROPS {
  children: ReactNode,
  title: string
};

const Layout: VFC<PROPS> = ({
  children,
  title
}) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{ title }</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <footer>
      </footer>
    </div>
  )
}

export default Layout;