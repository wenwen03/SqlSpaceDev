import React, { ReactNode } from 'react'
import { VFC } from 'react'

interface PROPS {
  children: ReactNode
}

const H2: VFC<PROPS> = ({ children }) => <h2>{ children }</h2>

export default H2
