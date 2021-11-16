import React, { ReactNode, VFC } from 'react'
import styles from '@/styles/components/molucules/Modal.module.scss'

interface PROPS {
  children: ReactNode
}

const Modal: VFC<PROPS> = ({
  children
}) => {
  return (
    <div className={ styles.background }>
      { children }
    </div>
  )
}

export default Modal
