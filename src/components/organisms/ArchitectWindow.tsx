import React, { VFC } from 'react'
import TableWindow from '../molucules/TableWindow'
import TitleWindow from '../molucules/TitleWindow'
import WindowFrame from '../molucules/WindowFrame'
import styles from '@/styles/components/organisms/ArchitectureWindow.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import TableEntity from '@/types/TableEntity'
import { useMissionState } from '@/redux/missions/selectors'

interface PROPS {
  clickaway: () => void,
  openTable: () => void,
  closeTable: () => void,
  isSqlMode: boolean,
  entity: TableEntity,
  title: string,
  btnLabel: string
}

const ArchitectureWindow: VFC<PROPS> = ({
  clickaway,
  openTable,
  closeTable,
  isSqlMode,
  entity,
  title,
  btnLabel
}) => {

  const state = useMissionState().mission

  return (
      <WindowFrame 
        className={`${ styles['architecture-window'] } ${ state.isEmphasize['architectureWindow'] ? animations.emphasize : ''}`} 
        clickaway={ clickaway }
      >
        { !isSqlMode ? 
          <TitleWindow 
            title={ title }
            btnLabel={ btnLabel }
            onClick={ openTable }
            current={0} 
            max={0} 
          /> :
          <TableWindow
            title={ entity.name }
            onClick={ closeTable }
            columns={ entity.columns }
            rows={ entity.rows }
          />
        }
      </WindowFrame>
  )
}

export default ArchitectureWindow
