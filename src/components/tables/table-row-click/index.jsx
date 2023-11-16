import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableContainer } from './style';

const TableComponent = (props) => {
  const { header, items, setItem, checkbox = false } = props;
  const [selectedRows] = useState([]);
  const handleRowClick = (params) => {
    if (!checkbox) {
      setItem(params.row);
    } else {
      setItem(params);
    }
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
        selectionModel={selectedRows}
        onRowSelectionModelChange={handleRowClick}
      />
    </TableContainer>
  );
};

export default TableComponent;
