import React, { VFC } from 'react'
import styles from '@/styles/components/atoms/Li.module.scss'

interface PROPS {
  list: Array<string>,
  className?: string
}

const Li: VFC<PROPS> = ({
  list,
  className
}) => (
  <ul>
    { list.map(( text, index ) => (
      <li
        className={`${className} ${styles.li}`}
        key={index}
      >
        { text }
      </li>)
    )}
  </ul>
)

export default Li
