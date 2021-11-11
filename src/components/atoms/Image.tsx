import React, { VFC } from 'react'
import MUIImage from 'next/image'

interface PROPS {
  src: string,
  alt?: string,
  className?: string,
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive',
  width?: number | string,
  height?: number | string
}

const Image: VFC<PROPS> = ({
  className,
  src,
  alt,
  layout = 'intrinsic',
  width = 100,
  height = 100
}) => (
  <MUIImage
    src={ src }
    alt={ alt }
    layout={ layout }
    className={ className }
    width={ width }
    height={ height }
  />
)

export default Image
