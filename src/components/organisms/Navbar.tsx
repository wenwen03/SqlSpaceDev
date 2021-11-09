import Link from 'next/link';
import React, { VFC } from 'react';
import Logo from '../molucules/Logo';
import styles from "@/styles/components/organisms/Navbar.module.scss"
import YellowButton from '../atoms/YellowButton';

const Navbar: VFC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.navbar}>
      <Logo/>
      <div className={styles.btnWrapper}>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <YellowButton/>
      </div>
    </div>
  )
};

export default Navbar;