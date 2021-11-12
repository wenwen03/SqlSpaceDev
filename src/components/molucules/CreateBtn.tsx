import React from 'react'
import Button from '../atoms/Button'
import ConstructionIcon from '@mui/icons-material/Construction';

const CreateBtn = () => {
  const show = function(): void {
    console.log('show')
  }

  return (
    <Button 
      onClick={ show }
      startIcon={ <ConstructionIcon/> }
    >
      create
    </Button>
  )
}

export default CreateBtn
