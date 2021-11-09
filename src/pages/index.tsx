import  Layout  from '@/components/templates/Layout'
import TopText from '@/components/organisms/TopText'
import Image from 'next/image'
import styles from '@/styles/pages/index.module.scss'

export default function Home() {
  return (
    <Layout title="hoge"
      wholeClass={ styles.index }
      mainClass={ styles.main }
      >
      <TopText/>
      <Image src='/img/top-img.svg' width={ 800 } height={ 500 }/>
    </Layout>
  )
}
