import { useMissionState } from '@/redux/missions/selectors';
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
}) => {

  const state = useMissionState().mission

  return (
    <TextField
      onChange={ onChange }
      className={ className }
      defaultValue={ state.initialText }
      label={ label }
      type='text'
      rows={ rows }
      multiline
      InputProps={{ className: textareaClass }}
    />
  )
}

export default Textarea
