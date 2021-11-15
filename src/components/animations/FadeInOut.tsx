import React, { ReactNode, VFC } from 'react'
import { CSSTransition } from 'react-transition-group';
import styles from '@/styles/components/animations/FadeInOut.module.scss'

interface PROPS {
  children: ReactNode,
  inProps?: boolean
  key?: number | string
}

const FadeInOut: VFC<PROPS> = ({
  children,
  inProps = true,
  key = null
}) => { 
  const nodeRef = React.useRef(null)
  return (
    <CSSTransition 
      key={ key }
      classNames={ styles }
      nodeRef={ nodeRef }
      in={ inProps } 
      timeout={ 500 }
      unmountOnExit
    >
      <div ref={ nodeRef }>
        {children}
      </div>
    </CSSTransition>
  )
 }

export default FadeInOut
