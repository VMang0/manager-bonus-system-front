import { styled } from '@mui/system';
import TableRow from '@mui/material/TableRow';
import { tokens } from '../../theme';

export const RowTables = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': { border: 0 },
  '&:hover': {
    cursor: 'pointer',
    background: `${
      theme.palette.mode === 'dark'
        ? tokens(theme.palette.mode).black['400']
        : tokens(theme.palette.mode).grey['100']
    }`,
  },
}));
