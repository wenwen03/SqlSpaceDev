import React, { VFC } from 'react'
import Population from '../molucules/Population'
import ResourceCard from '../molucules/ResourceCard'
import styles from '@/styles/components/organisms/ResourceBar.module.scss'

const RESOURCE_DATA: Array<ResouceData> = [
  { type: 'oil', amount: 1024 },
  { type: 'ice', amount: 1024 },
  { type: 'food', amount: 1024 },
  { type: 'power', amount: 1024 },
  { type: 'wood', amount: 1024 },
]

interface ResouceData {
  type: 'oil' | 'ice' | 'food' | 'power' | 'wood',
  amount: number
}

const ResourceBar: VFC = () => (
  <div className={ styles['resource-bar'] }>
    { RESOURCE_DATA.map(( resource, index ) => (
      <ResourceCard type={ resource.type } amount={ resource.amount } key={ index }/>
    ))}
    <Population current={0} max={20} />
  </div>
)

export default ResourceBar
