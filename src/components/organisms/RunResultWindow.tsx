import React, { VFC } from 'react'
import styles from '@/styles/components/organisms/RunResultWindow.module.scss'
import Button from '../atoms/Button'
import Modal from '../molucules/Modal'
import H5 from '../atoms/H5'
import H4 from '../atoms/H4'
import missionSlice from '@/redux/missions/slice'
import { useDispatch } from 'react-redux'

interface PROPS {
  result?: string,
  isOpen: boolean,
  setShowResultModal: (boolean) => void
}

const RunResultWindow: VFC<PROPS> = ({
  result,
  isOpen,
  setShowResultModal
}) => {

  const dispatch = useDispatch()
  const closeModalAndDispatch= () => {
    dispatch(missionSlice.actions.nextStep('runResultModal'))
    setShowResultModal(false)
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ closeModalAndDispatch }
    >
      <H5>実行結果</H5>
      <H4 className={ styles.correct }>Correct!!</H4>
      <div className={ styles['modal-body'] }>
        { result }
      </div>
      <Button onClick={ closeModalAndDispatch }>ok</Button>
    </Modal>
  )
}

export default RunResultWindow
