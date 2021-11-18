import React, { useLayoutEffect, useRef, VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'
import { TransitionGroup } from 'react-transition-group'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FadeInOut from '../animations/FadeInOut'
import { useMissionState } from '@/redux/missions/selectors'

const ChatBox: VFC = () => {

  const state = useMissionState().mission
  const scenario = state.scenario

  // 表示セリフ更新時に一番下までスクロール
  const bottomRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView()
  }, [ scenario.slice(0, state.step) ])

  return (
    <div className={ `${ state.isSqlMode ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }>
      <div className={ styles.info }><PlayCircleFilledWhiteIcon/>画面上をクリックして話を進める</div>
      <TransitionGroup component='div' >
        { scenario.slice(0, state.step).map(( scenarioStep, index ) =>
          <FadeInOut key={ index }>
            <Bubble
              className={ styles.bubble }
              speaker={ scenarioStep.serif.speaker }
              comment={ scenarioStep.serif.comment }
            />
          </FadeInOut>
        )}
      </TransitionGroup>
      <div ref={ bottomRef } />
    </div>
  )
}

export default ChatBox
