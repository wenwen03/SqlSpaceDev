import React, { useState, VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'
import Chat from '@/types/Chat'

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
  const startStep = step - DISPLAY_COUNT < 0 ? 0 : step - DISPLAY_COUNT
  const nextStep = function(): void {
    step === chatList.length ?
      void(0) : setStep(pre => pre += 1)
  }
  return (
    <div
      className={ `${sqlFlg ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }
      onClick={ nextStep }
    >
      { chatList.slice(startStep, step).map(( bubble, index ) =>
        <Bubble
          key={ index }
          className={ styles.bubble }
          speaker={ bubble.speaker }
          comment={ bubble.comment }
        />
      )}
    </div>
  )
}

export default ChatBox
