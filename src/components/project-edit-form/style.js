import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../theme';

export const ProjectAddFormStyled = styled(Box)(({ theme }) => ({
  maxHeight: '100vh',
  background: `${theme.palette.mode === 'dark' ? '#121212' : '#fff'}`,
  border: `1px solid ${theme.palette.custom.secondary}`,
  padding: '40px',
  borderRadius: '20px',
  overflowY: 'auto',
}));
export const AddForm = styled('form')(({ theme }) => ({
  '.InputContainer': {
    width: '70%',
  },
  '.MuiTypography-root': {
    height: '45px',
  },
  '.icon-line': {
    display: 'flex',
    alignItems: 'center',
  },
  '.btn-container': {
    display: 'flex',
    justifyContent: 'right',
    paddingTop: '20px',
    '.MuiButtonBase-root': {
      marginRight: 0,
      '.MuiTypography-root': {
        height: 'auto',
        padding: 0,
      },
    },
    '.cancel': {
      backgroundColor: tokens(theme.palette.mode).grey['800'],
      marginRight: '10px',
    },
  },
}));
