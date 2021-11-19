import React, { VFC } from 'react'
import TableWindow from '../molucules/TableWindow'
import TitleWindow from '../molucules/TitleWindow'
import WindowFrame from '../molucules/WindowFrame'
import styles from '@/styles/components/organisms/ResourceWindow.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import TableEntity from '@/types/TableEntity'
import { useMissionState } from '@/redux/missions/selectors'
import TaskCard from '../molucules/TaskCard'

interface PROPS {
  clickaway: () => void,
  openTable: () => void,
  closeTable: () => void,
  isSqlMode: boolean,
  entity: TableEntity,
  title: string,
  btnLabel: string
}

const ResourceWindow: VFC<PROPS> = ({
  clickaway,
  openTable,
  closeTable,
  isSqlMode,
  entity,
  title,
  btnLabel
}) => {

  const titleWindow = (
    <WindowFrame
      clickaway={ clickaway } 
      className={ styles['title-window']}
    >
      <TitleWindow 
        title={ title }
        btnLabel={ btnLabel }
        onClick={ openTable }
        current={0} 
        max={0} 
      />
    </WindowFrame>
  )

  const tableWindow = (
    <div className={ styles['table-window'] }>
      <TaskCard/>
      <WindowFrame clickaway={ clickaway }>
        <TableWindow
          title={ entity.name }
          onClick={ closeTable }
          columns={ entity.columns }
          rows={ entity.rows }
        />
      </WindowFrame>
    </div>
  )

  return isSqlMode ? tableWindow : titleWindow
}

export default ResourceWindow
