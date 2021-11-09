import React, { ReactNode } from 'react'
import { VFC } from 'react'

interface PROPS {
  children: ReactNode
}

const H1: VFC<PROPS> = ({ children }) => <h1>{ children }</h1>

export default H1
