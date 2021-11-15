import React, { useEffect, useState, VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'
import Chat from '@/types/Chat'
import { TransitionGroup } from 'react-transition-group'
import FadeInOut from '../animations/FadeInOut'

interface PROPS {
  sqlFlg: boolean,
  chatList: Array<Chat>
}

/** 画面に表示するメッセージ数 */
const DISPLAY_COUNT = 3

const ChatBox: VFC<PROPS> = ({
  sqlFlg,
  chatList
}) => {
  const [step, setStep] = useState(1)
  const startStep = 0
  const nextStep = function(): void {
    step === chatList.length ?
      void(0) : setStep(pre => pre += 1)
  }

  return (
    <TransitionGroup
      component='div'
      className={ `${sqlFlg ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }
      onClick={ nextStep }
    >
      { chatList.slice(startStep, step).map(( bubble, index ) =>
        <FadeInOut key={ index }>
          <Bubble
            className={ styles.bubble }
            speaker={ bubble.speaker }
            comment={ bubble.comment }
          />
        </FadeInOut>
      )}
    </TransitionGroup>
  )
}

export default ChatBox
