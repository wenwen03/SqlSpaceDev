import Link from 'next/link';
import React, { VFC } from 'react';
import Logo from '../molucules/Logo';
import styles from "@/styles/components/organisms/Navbar.module.scss"
import Button from '../atoms/Button';

const Navbar: VFC = () => {

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
        <Button>login</Button>
      </div>
    </div>
  )
};

export default Navbar;