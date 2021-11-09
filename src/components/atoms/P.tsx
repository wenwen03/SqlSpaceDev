import React, { ReactNode } from 'react'
import { VFC } from 'react'

interface PROPS {
  children: ReactNode
}

const P: VFC<PROPS> = ({ children }) => <p>{ children }</p>

export default P
