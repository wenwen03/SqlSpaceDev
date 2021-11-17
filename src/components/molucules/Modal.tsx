import React, { ReactNode, VFC } from 'react'
import styles from '@/styles/components/molucules/Modal.module.scss'
import Card from '../atoms/Card'
import MUIModal from '@mui/material/Modal';
import { Box } from '@mui/system';

interface PROPS {
  children: ReactNode,
  isOpen: boolean,
  onClose?: () => void
}

const Modal: VFC<PROPS> = ({
  children,
  isOpen,
  onClose
}) => (
  <MUIModal 
    open={ isOpen }
    onClose={ onClose }
    className={styles.background}
  >
    <Box>
      <Card className={styles.modal}>
        {children}
      </Card>
    </Box>
  </MUIModal>
)

export default Modal
