import { ReactNode, VFC } from "react"
import styles from '@/styles/components/atoms/Circle.module.scss'

interface PROPS {
  children: ReactNode,
  className: string
}

const Circle: VFC<PROPS> = ({
    children,
    className
  }) => (
  <div className={`${className} ${styles.circle}`}>
    { children }
  </div>
)

export default Circle
