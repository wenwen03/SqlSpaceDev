import Router from 'next/router'
import React, { ReactNode, VFC } from 'react'
import Button from '../atoms/Button'
import MyImg from '../atoms/MyImg'
import Modal from '../molucules/Modal'
import styles from '@/styles/components/organisms/CompleteModal.module.scss'
import Avatar from '../atoms/Avatar'
import P from '../atoms/P'
import H5 from '../atoms/H5'
import { useMissionState } from '@/redux/missions/selectors'

interface PROPS {
  children?: ReactNode,
}

const CompleteModal: VFC<PROPS> = () => {

  const state = useMissionState().mission

  const toHome = () => Router.push('/home')
  const next = () => alert('クリックしてくれてありがとう！でもまだ実装してないです。ごめんなさい。しばしお待ちを。')

  return (
    <Modal
      isOpen={ state.showCompleteModal }
    >
      <MyImg 
        alt='congratulations image'
        width={400}
        height={250}
        src='/videos/complete.gif' 
        className={ styles['main-contents'] }
      />
      <div className={ styles['user-name'] }>
        <Avatar alt='user icon' src='/img/character/human.png'/>
        <H5>Test User Lv.1 → Lv.2</H5>
      </div>
      <a href='https://twitter.com/wen_frt' className={ styles.link} target='_blank' rel='noopener noreferrer'>
        開発進捗はTwitterで
      </a><br/>
      <a href='https://forms.gle/vBjUDpfNB4xFku5q8' className={ styles.link } target='_blank' rel='noopener noreferrer'>
        お時間あれば、アンケートお願いします。
      </a>
      <P className={ styles.rewards }>EXP +500</P>
      <div className={ styles['btn-wrapper'] }>
        <Button onClick={ toHome }>back home</Button>
        <Button onClick={ next }>next mission</Button>
      </div>
    </Modal>
  )
}

export default CompleteModal
