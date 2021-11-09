import { ReactNode, VFC } from 'react'
import styles from "@/styles/components/templates/Layout.module.scss"
import Head from 'next/head'
import Navbar from '../organisms/Navbar'

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
  return (
    <div className={ wholeClass }>
      <Head>
        <title>{ title }</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className={ mainClass }>{ children }</main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout;