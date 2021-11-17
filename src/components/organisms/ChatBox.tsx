import React, { useLayoutEffect, useRef, VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'
import Chat from '@/types/Chat'
import { TransitionGroup } from 'react-transition-group'
import FadeInOut from '../animations/FadeInOut'

interface PROPS {
  sqlFlg: boolean,
  chatList: Array<Chat>,
  step: number
}

const ChatBox: VFC<PROPS> = ({
  sqlFlg,
  chatList,
  step
}) => {

  // ChatList更新時に一番下までスクロールする
  const bottomRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [ chatList.slice(0,step) ])

  return (
    <TransitionGroup
      component='div'
      className={ `${sqlFlg ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }
    >
      { chatList.slice(0, step).map(( bubble, index ) =>
        <FadeInOut key={ index }>
          <Bubble
            className={ styles.bubble }
            speaker={ bubble.speaker }
            comment={ bubble.comment }
          />
        </FadeInOut>
      )}
      <div ref={ bottomRef } />
    </TransitionGroup>
  )
}

export default ChatBox
