import React, { useLayoutEffect, useRef, VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'
import Chat from '@/types/Chat'
import { TransitionGroup } from 'react-transition-group'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
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
    <div className={ `${sqlFlg ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }>
      <div className={ styles.info }><PlayCircleFilledWhiteIcon/>画面上をクリックして話を進める</div>
      <TransitionGroup component='div' >
        { chatList.slice(0, step).map(( bubble, index ) =>
          <FadeInOut key={ index }>
            <Bubble
              className={ styles.bubble }
              speaker={ bubble.speaker }
              comment={ bubble.comment }
            />
          </FadeInOut>
        )}
      </TransitionGroup>
      <div ref={ bottomRef } />
    </div>
  )
}

export default ChatBox
