import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableContainer } from './style';

const TableComponent = ({ header, items, setItem, checkbox = false }) => {
  const handleRowClick = (params) => {
    setItem(params.row);
  };

  return (
    <TableContainer>
      <DataGrid
        rows={items}
        columns={header}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
        checkboxSelection={checkbox}
      />
    </TableContainer>
  );
};

export default TableComponent;
