import Link from 'next/link';
import React, { VFC } from 'react';
import Logo from '@/components/molucules/Logo';
import styles from "@/styles/components/organisms/Navbar.module.scss"
import Button from '@/components/atoms/Button';
import Router from 'next/router';

const Navbar: VFC = () => {

  const login = function(): void {
    Router.push('/home')
  }

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
        <Button onClick={ login }>login</Button>
      </div>
    </div>
  )
};

export default Navbar;