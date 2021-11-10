import { ReactNode, VFC } from "react"
import styles from '@/styles/components/atoms/Circle.module.scss'

interface PROPS {
  children: ReactNode
}

const Circle: VFC<PROPS> = ({ children }) => (
  <div className={ styles.circle }>
    { children }
  </div>
)

export default Circle
