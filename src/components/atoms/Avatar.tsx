import MUIAvatar from '@mui/material/Avatar'
import React, { VFC } from 'react'

interface PROPS {
  alt: string,
  src: string,
  className?: string
}

const Avatar: VFC<PROPS> = ({
  alt = 'icon',
  src,
  className
}) => (
  <MUIAvatar 
    className={ className }
    alt={ alt }
    src={ src }
    sx={{
      border: 'solid 2px #ecd37e',
      width: '50px',
      height: '50px'
    }}
  />
)

export default  Avatar
