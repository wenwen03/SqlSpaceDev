import Router from 'next/router'
import React, { ReactNode, VFC } from 'react'
import Button from '../atoms/Button'
import H4 from '../atoms/H4'
import MyImg from '../atoms/MyImg'
import Modal from '../molucules/Modal'
import styles from '@/styles/components/organisms/CompleteModal.module.scss'

interface PROPS {
  children?: ReactNode,
  isOpen: boolean,
  onClose: () => void
}

const CompleteModal: VFC<PROPS> = ({
  isOpen,
  onClose
}) => {

  const toHome = () => Router.push('/home')
  const next = () => Router.push('/mission2')

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <H4>Congratulations!!</H4>
      <MyImg 
        alt='congratulations image'
        width={400}
        height={250}
        src='/img/character/complete.png' 
        className={ styles['main-contents'] }
      />
      <div className={ styles['btn-wrapper'] }>
        <Button onClick={ toHome }>home</Button>
        <Button onClick={ next }>next</Button>
      </div>
    </Modal>
  )
}

export default CompleteModal
