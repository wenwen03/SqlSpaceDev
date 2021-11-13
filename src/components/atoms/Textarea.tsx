import TextField from '@mui/material/TextField';
import React, { ChangeEvent, VFC } from 'react'

interface PROPS {
  className?: string,
  textareaClass?: string,
  label?: string,
  rows?: number,
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: VFC<PROPS> = ({
  onChange,
  className,
  textareaClass,
  label,
  rows = 1
}) => (
  <TextField
    onChange={ onChange }
    className={ className }
    label={ label }
    type='text'
    rows={ rows }
    multiline
    InputProps={{ className: textareaClass }}
  />
)

export default Textarea
