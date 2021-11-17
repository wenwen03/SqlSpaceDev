import React, { VFC } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '@/styles/components/molucules/TableWindow.module.scss'
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import P from '../atoms/P';

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'gray'
  },
  '$:hover': {
    opacity: '0.4'
  }
}));

interface PROPS {
  title: string,
  rows: Array<any>,
  columns: Array<string>,
  onClick: () => void
}

const TableWindow: VFC<PROPS> = ({
  title,
  rows,
  columns,
  onClick
}) => (
  <>
    <Card className={ styles.title }>
      { title }
      <Button onClick={ onClick }>close</Button>
    </Card>
    <Card className={ styles['table-window'] } noPadding >
      <Table 
        sx={{ minWidth: 450 }}
        size="small"
        stickyHeader
      >
        <TableHead >
          <TableRow >
            { columns.map(( column, index ) => (
              <TableCell
                align={ index ? 'right': 'left' }
                key={ index } 
                sx={{ color: 'black' }}
              >
                { column }
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(( row, index ) => (
            <StyledTableRow key={ index } >
              { columns.map(( column, index ) => (
                <TableCell 
                  component="th"
                  scope='row'
                  align={ index ? 'right' : 'left' } 
                  key={ index } 
                  sx={{ color: 'white' }}
                >
                  { row[column] }
                </TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
        { rows.length === 0 && <P className={ styles['nothing-text'] }>データがありません</P>}
    </Card>
  </>
);

export default TableWindow;
