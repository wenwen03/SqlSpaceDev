import React, { VFC } from 'react'

interface PROPS {
  src: string,
  className?: string,
  width?: number,
  height?: number,
  alt?: string,
  loading?: 'lazy' | 'eager'
}

const MyImg: VFC<PROPS> = ({
  src,
  className,
  alt = 'image',
  width = 100,
  height = 100,
  loading = 'lazy'
}) => (
  <img
    className={ className }
    width={ width }
    height={ height }
    alt={ alt }
    src={ src }
    loading={ loading }
  />
)

export default MyImg
