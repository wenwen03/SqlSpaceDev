import Link from 'next/link'
import { VFC } from 'react'
import styles from "@/styles/components/molucules/Logo.module.scss"

const Logo: VFC = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>SQL SPACE DEV</a>
    </Link>
  )
}

export default Logo
