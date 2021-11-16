import React, { ReactNode, VFC } from 'react'
import Card from '../atoms/Card'
import styles from '@/styles/components/organisms/RunResultWindow.module.scss'
import Button from '../atoms/Button'
import Modal from '../molucules/Modal'
import H5 from '../atoms/H5'
import H4 from '../atoms/H4'

interface PROPS {
  result: string,
  onClick: () => void
}

const RunResultWindow: VFC<PROPS> = ({
  result,
  onClick
}) => {

  return (
    <Modal>
      <Card className={ styles['run-result-window'] }>
        <H5>実行結果</H5>
        <H4 className={ styles.correct }>Correct!!</H4>
        <div className={ styles['modal-body'] }>
          { result }
        </div>
        <Button onClick={ onClick }>ok</Button>
      </Card>
    </Modal>
  )
}

export default RunResultWindow
