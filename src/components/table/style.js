import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../theme';

export const TableContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  '.MuiDataGrid-root': {
    borderRadius: '20px',
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
}));
