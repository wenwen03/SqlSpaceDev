import TextField from '@mui/material/TextField';
import React, { VFC } from 'react'

interface PROPS {
  className?: string,
  textareaClass?: string,
  label?: string,
  rows?: number
}

const Textarea: VFC<PROPS> = ({
  className,
  textareaClass,
  label,
  rows = 1
}) => (
  <TextField
    className={ className }
    label={ label }
    type='text'
    rows={ rows }
    multiline
    InputProps={{ className: textareaClass }}
  />
)

export default Textarea
