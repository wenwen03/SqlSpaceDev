import React, { VFC } from 'react'
import Bubble from '@/components/molucules/Bubble'
import Image from 'next/image'
import styles from '@/styles/components/organisms/MissionDesc.module.scss'

interface PROPS {
  className: string
}

const MissionDesc: VFC<PROPS> = ({
  className
}) => (
  <div className={ `${ styles['mission-desc'] } ${ className }`}>
    <Bubble
      className={ styles['human-comment'] }
      comment='君が新入社員の「」さんですね。今年は新卒で応募してきたのが君しか居なかったから早速現場で働いてもらいますよ！'
      speaker='human'
    />
    <Bubble
      className={ styles['dog-comment'] }
      comment='幸運なことに君は、新しく開発する都市に移住しながら住み込みで働けるよ！準備できたら早速向かおう！'
      speaker='dog'
    />
    <Image className={ styles.img } src='/img/character/human.png' width={200} height={200}/>
    <Image className={ styles.img } src='/img/character/dog.png' width={100} height={100} />
  </div>
)

export default MissionDesc
