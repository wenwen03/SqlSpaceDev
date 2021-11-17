import React, { useLayoutEffect, useRef, VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'
import Chat from '@/types/Chat'
import { TransitionGroup } from 'react-transition-group'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FadeInOut from '../animations/FadeInOut'
import { useMissionState } from '@/redux/missions/selectors'
import Mission01 from '@/scenarios/Mission01'


const ChatBox: VFC = () => {

  const state = useMissionState().mission

  // ChatList更新時に一番下までスクロールする
  const bottomRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [ Mission01.slice(0, state.step) ])

  return (
    <div className={ `${ state.isSqlMode ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }>
      <div className={ styles.info }><PlayCircleFilledWhiteIcon/>画面上をクリックして話を進める</div>
      <TransitionGroup component='div' >
        { Mission01.slice(0, state.step).map(( bubble, index ) =>
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
