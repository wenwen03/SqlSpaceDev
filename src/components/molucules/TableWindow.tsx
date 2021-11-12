import React, { VFC } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '@/styles/components/molucules/TableWindow.module.scss'
import Card from '../atoms/Card';

const ROWS = [
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
  { id: 101, name: 'furuta', 'moved_at': '2021/11/11'},
];

const COLUMNS = [
  'id', 'name', 'moved_at'
]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'gray'
  },
  '$:hover': {
    opacity: '0.4'
  }
}));

export default function TableWindow() {
  return (
    <Card className={ styles['table-window'] } noPadding >
      <Table 
        sx={{ minWidth: 450 }}
        size="small"
        stickyHeader
        aria-label="a dense table"
      >
        <TableHead >
          <TableRow >
            { COLUMNS.map(( column, index ) => (
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
          { ROWS.map(( row, index ) => (
            <StyledTableRow key={ index } >
              { COLUMNS.map(( column, index ) => (
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
    </Card>
  );
}
