import React, { useState, VFC } from 'react'
import TableWindow from '../molucules/TableWindow'
import TitleWindow from '../molucules/TitleWindow'
import WindowFrame from '../molucules/WindowFrame'
import styles from '@/styles/components/organisms/ResidenceWindow.module.scss'
import animations from '@/styles/components/animations/Emphasize.module.scss';
import ResidenceEntity from '@/types/ResidenceEntity'
import { useMissionState } from '@/redux/missions/selectors'

interface PROPS {
  clickaway: () => void,
  setIsSqlMode: (boolean) => void,
  entity: ResidenceEntity
}

const ResidenceWindow: VFC<PROPS> = ({
  clickaway,
  setIsSqlMode,
  entity
}) => {

  const state = useMissionState().mission

  // テーブル表示切替
  const [tableFlg, setTableFlg] = useState(false)
  const toTable = function(): void {
    setTableFlg(true)
    setIsSqlMode(true)
  }
  const toTitle = function(): void {
    setTableFlg(false)
    setIsSqlMode(false)
  }

  return (
      <WindowFrame 
        className={`${ styles['residence-window'] } ${ state.isEmphasize['residenceWindow'] ? animations.emphasize : ''}`} 
        clickaway={ clickaway }
      >
        { !tableFlg ? 
          <TitleWindow 
            onClick={ toTable }
            current={0} 
            max={0} 
          /> :
          <TableWindow
            title={ entity.name }
            onClick={ toTitle }
            columns={ entity.columns }
            rows={ entity.rows }
          />
        }
      </WindowFrame>
  )
}

export default ResidenceWindow
