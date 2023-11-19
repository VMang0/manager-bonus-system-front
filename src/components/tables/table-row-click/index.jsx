import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableContainer } from './style';

const TableComponent = (props) => {
  const { header, items, setItem, checkbox = false, checked = [] } = props;
  const handleRowClick = (params) => {
    if (!checkbox) {
      setItem(params.row);
    }
  };
  const handleRowsSelect = (params) => {
    if (checkbox) {
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
        rowSelectionModel={checked}
        onRowSelectionModelChange={handleRowsSelect}
      />
    </TableContainer>
  );
};

export default TableComponent;
