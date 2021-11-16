import React, { VFC } from 'react'
import styles from '@/styles/components/organisms/RunResultWindow.module.scss'
import Button from '../atoms/Button'
import Modal from '../molucules/Modal'
import H5 from '../atoms/H5'
import H4 from '../atoms/H4'

interface PROPS {
  result?: string,
  isOpen: boolean,
  onClose: () => void
}

const RunResultWindow: VFC<PROPS> = ({
  result,
  isOpen,
  onClose
}) => {

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
    >
      <H5>実行結果</H5>
      <H4 className={ styles.correct }>Correct!!</H4>
      <div className={ styles['modal-body'] }>
        { result }
      </div>
      <Button onClick={ onClose }>ok</Button>
    </Modal>
  )
}

export default RunResultWindow
