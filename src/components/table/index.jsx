import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RowTables } from './style';

const TableComponent = ({ header, items, setItem }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {header?.map((item, index) => (
              <TableCell key={index}>{item.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((item, index) => (
            <RowTables key={index} onClick={() => setItem(item)}>
              {header.map((header_item, index) => (
                <TableCell key={index} component='th' scope='row'>
                  {item[header_item.field]}
                </TableCell>
              ))}
            </RowTables>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
