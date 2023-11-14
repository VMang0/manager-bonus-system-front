import { styled } from '@mui/system';

export const VerifyManagerForm = styled('form')(({ theme }) => ({
  width: '25%',
  background: `${theme.palette.mode === 'dark' ? '#121212' : '#fff'}`,
  borderRadius: '20px',
  padding: '20px',
  border: `1px solid ${theme.palette.custom.secondary}`,
  '.btn-container': {
    display: 'flex',
    justifyContent: 'right',
    paddingBottom: '20px',
    button: {
      borderRadius: '50px',
      padding: '5px',
      color: 'inherit',
      minWidth: 'auto',
    },
  },
  '.btn-send-email': {
    margin: '0 auto',
    '.btn-text': {
      paddingLeft: 0,
    },
  },
}));
