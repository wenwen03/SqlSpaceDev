import React, { VFC } from 'react'

/** 列間隔 */
const COL_RANGE = 100/6
/** 行間隔 */
const ROW_RANGE = 100 + 8

/** 直線データ */
const matrix: Array<Coodinate> = [
  // 1行目
  {x1: 4, x2: 4, y1: 1, y2: 2},
  {x1: 4, x2: 3, y1: 1, y2: 2},
  {x1: 4, x2: 5, y1: 1, y2: 2},
  {x1: 4, x2: 6, y1: 1, y2: 2},
  // 2行目
  {x1: 4, x2: 5, y1: 2, y2: 3},
  {x1: 5, x2: 5, y1: 2, y2: 3},
  {x1: 6, x2: 6, y1: 2, y2: 4},
  {x1: 3, x2: 3, y1: 2, y2: 3},
  {x1: 3, x2: 2, y1: 2, y2: 3},
  // 3行目
  {x1: 2, x2: 1, y1: 3, y2: 4},
  {x1: 2, x2: 2, y1: 3, y2: 4},
  {x1: 2, x2: 3, y1: 3, y2: 4},
  {x1: 5, x2: 5, y1: 3, y2: 4},
  // 4行目
  {x1: 1, x2: 1, y1: 4, y2: 5},
  {x1: 2, x2: 2, y1: 4, y2: 5},
  {x1: 3, x2: 3, y1: 4, y2: 5},
  {x1: 4, x2: 4, y1: 4, y2: 5},
  {x1: 3, x2: 4, y1: 4, y2: 4},
  {x1: 5, x2: 5, y1: 4, y2: 5},
  {x1: 6, x2: 6, y1: 4, y2: 5},
]

interface Coodinate {
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

const SkillLines: VFC = () => {

  /**
   * 直線X座標算出
   * @param colNo 列番号
   * @returns 直線X座標
   */
  const lineX = function(colNo: number): string {
    const x = colNo* COL_RANGE - COL_RANGE/2
    return `${x}%`
  }

  /**
   * 直線Y座標算出
   * @param rowNo 行番号
   * @returns 直線Y座標
   */
  const lineY = function(rowNo: number): number {
    const y = rowNo * ROW_RANGE - ROW_RANGE/2
    return y
  }

  return (
    <>
      <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {matrix.map(( cordinate, index ) => (
          <line
            x1={lineX(cordinate.x1)}
            y1={lineY(cordinate.y1)}
            x2={lineX(cordinate.x2)}
            y2={lineY(cordinate.y2)}
            stroke='orange'
            strokeWidth={3}
            key={index}
          />
        ))}
      </svg>
    </>
  )
}

export default SkillLines
