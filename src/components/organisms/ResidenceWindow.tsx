import React, { useState, VFC } from 'react'
import TableWindow from '../molucules/TableWindow'
import TitleWindow from '../molucules/TitleWindow'
import WindowFrame from '../molucules/WindowFrame'
import styles from '@/styles/components/organisms/ResidenceWindow.module.scss'

const ROWS = [
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
];

const COLUMNS = [
  'id', 'name', 'moved_at'
]

interface PROPS {
  clickaway: () => void,
  startSQL: () => void
  endSQL: () => void
}

const ResidenceWindow: VFC<PROPS> = ({
  clickaway,
  startSQL,
  endSQL
}) => {

  // テーブル表示切替
  const [tableFlg, setTableFlg] = useState(false)
  const toTable = function(): void {
    setTableFlg(true)
    startSQL()
  }
  const toTitle = function(): void {
    setTableFlg(false)
    endSQL()
  }

  return (
      <WindowFrame 
        className={ styles['residence-window'] } 
        clickaway={ clickaway }
      >
        { !tableFlg ? 
          <TitleWindow 
            onClick={ toTable }
            current={0} 
            max={0} 
          /> :
          <TableWindow
            title='yamada-haitsu'
            onClick={ toTitle }
            columns={ COLUMNS }
            rows={ ROWS }
          />
        }
      </WindowFrame>
  )
}

export default ResidenceWindow
