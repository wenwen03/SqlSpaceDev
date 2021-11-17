import React, { VFC } from 'react'
import styles from '@/styles/components/atoms/Star.module.scss';
import animations from '@/styles/components/animations/Breathing.module.scss'

interface PROPS {
  top: string,
  left: string,
  radius: string,
  delay: string
}

const Star:VFC<PROPS> = ({
  top,
  left,
  radius,
  delay
}) => (
  <div 
    className={`${ styles.star } ${ animations.breathing }`} 
    style={{ top, left, width: radius, height: radius, animationDelay: delay }} 
  />
)

export default Star
