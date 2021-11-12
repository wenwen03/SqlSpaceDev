import React, { useState, VFC } from 'react'
import TableWindow from '../molucules/TableWindow'
import TitleWindow from '../molucules/TitleWindow'
import WindowFrame from '../molucules/WindowFrame'

const ROWS = [
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
];

const COLUMNS = [
  'id', 'name', 'moved_at'
]

interface PROPS {
  className?: string
}

const ResidenceWindow: VFC<PROPS> = () => {

  // テーブル表示切替
  const [tableFlg, setTableFlg] = useState(false)
  const toggle = function(): void {
    setTableFlg(pre => !pre)
  }

  return (
    <WindowFrame>
      { !tableFlg ? 
        <TitleWindow 
          onClick={ toggle }
          current={0} 
          max={0} 
        /> :
        <TableWindow
          title='yamada-haitsu'
          onClick={toggle}
          columns={ COLUMNS }
          rows={ ROWS }
        />
      }
    </WindowFrame>
  )
}

export default ResidenceWindow
