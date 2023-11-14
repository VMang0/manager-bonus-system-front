import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableContainer } from '../table-row-click/style';

const SimpleTableComponent = (props) => {
  const { header, items } = props;

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
        disableRowSelectionOnClick
      />
    </TableContainer>
  );
};

export default SimpleTableComponent;
