import React, { VFC } from 'react'
import Bubble from '../molucules/Bubble'
import styles from '@/styles/components/organisms/ChatBox.module.scss'

interface PROPS {
  sqlFlg: boolean
}

const ChatBox: VFC<PROPS> = ({
  sqlFlg
}) => {
  return (
    <div className={ `${sqlFlg ? styles['sql-mode'] : '' }  ${ styles['chat-box'] }` }>
      <Bubble
        className={ styles.bubble }
        speaker='human' 
        comment='いよいよ初めてのお仕事ですね！
          僕たちがこの星に最初の住人となるのです！
          まずは僕たちの部屋を建設しましょう。'
      />
      <Bubble
        className={ styles.bubble }
        speaker='dog' 
        comment='じゃあ、ボタンを押して部屋作成を始めてみましょう。'
      />
    </div>
  )
}

export default ChatBox
