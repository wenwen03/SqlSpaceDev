import React, { memo, VFC } from 'react'
import Star from '../atoms/Star'
import styles from '@/styles/components/molucules/StarSky.module.scss'

const StarSky: VFC = memo(() => {

  const list: Array<number> = [...Array(100)]
  const stars = list.map(() => { 
    const radius = Math.random() * 5
    return {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      radius : `${ radius }px`,
      delay: `${Math.random() * 5}s`
    }
 })

  return (
    <div className={ styles['star-sky'] }>
      {
        stars.map( ( star, index ) => (
          <Star 
            key={ index }
            top={ star.top } 
            left={ star.left } 
            radius={ star.radius } 
            delay={ star.delay }
          />
        ))
      }
    </div>
  )
})

export default StarSky
