import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../../theme';

export const TableContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  flexGrow: 1,
  '.MuiDataGrid-root': {
    borderRadius: '20px',
    width: '100%',
  },
  '.MuiSvgIcon-root': {
    color: tokens(theme.palette.mode).darkBlue['200'],
  },
  '.css-hgslhe-MuiDataGrid-root .MuiDataGrid-row.Mui-selected': {
    backgroundColor: `rgba(221,238,255, 0.1)`,
  },
  '.css-m15rfw-MuiDataGrid-root .MuiDataGrid-row.Mui-selected': {
    backgroundColor: `rgba(221,238,255, 0.3)`,
  },
  /*'.MuiDataGrid-columnHeadersInner': {
    width: '100%',
  },
  '.css-yrdy0g-MuiDataGrid-columnHeaderRow': {
    width: '100%',
    justifyContent: 'space-between',
  },*/
}));
