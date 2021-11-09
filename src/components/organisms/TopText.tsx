import React, { VFC } from 'react'
import P from '../atoms/P';
import Title from '../molucules/Title'
import styles from '@/styles/components/organisms/TopText.module.scss'
import Button from '@/components/atoms/Button'

const TopText: VFC = () => {
  return (
    <div className={ styles.toptext}>
      <Title/>
      <P className={ styles.description }>
        人類は新しい居住地として、新たな惑星の開拓を行う。<br/>
        惑星の開発を行う大企業「SpaceDev Inc.」<br/>
        の新入社員として、新たな惑星で都市を建設しよう！<br/><br/>

        SQLを使って建物を建設したり、部屋を改築し、住みやすい宇宙都市を<br/>
        建設することがあなたのお仕事です！<br/><br/>

        基礎的なSQLから応用的なSQLまでゲーム感覚で楽しく学び、<br/>
        優秀な社員へと成長してみましょう！
      </P>
      <Button className={ styles.btn } size='large'>start free</Button>
    </div>
  )
}

export default TopText;
