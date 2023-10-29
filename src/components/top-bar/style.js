import { styled } from '@mui/system';
import { Box, Button, Grid } from '@mui/material';
import { tokens } from '../../theme';

export const StyledTopBarComponent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '24px 32px',
  '.flex': {
    display: 'flex',
    '.container-notification': {
      paddingRight: '20px',
      borderRight: `1px solid ${tokens(theme.palette.mode).grey.DEFAULT}`,
    },
  },
  '.container-badge-avatars': {
    display: 'flex',
    marginLeft: '28px',
  },
  '.name-of-page': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));
export const StyledProjectsComponent = styled(Grid)(({ theme }) => ({
  paddingLeft: '30px',
  '.iconButton': {
    '&:hover': { background: 'transparent' },
  },
  '.MuiInputBase-root': {
    padding: '5px 15px',
    background: `${
      theme.palette.mode === 'dark'
        ? tokens(theme.palette.mode).black['500']
        : tokens(theme.palette.mode).grey['100']
    }`,
    borderRadius: '20px',
    width: '300px',
  },
}));
export const ButtonStartProject = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: tokens(theme.palette.mode).darkBlue['200'],
  color: tokens(theme.palette.mode).greyLight1['50'],
  height: '42px',
  boxSizing: 'border-box',
  borderRadius: '50px',
  padding: '10px 10px',
  marginRight: '30px',
  '.btn-text': {
    paddingLeft: '5px',
    color: tokens(theme.palette.mode).greyLight1['50'],
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'none',
  },
  '&:hover': {
    backgroundColor: tokens(theme.palette.mode).darkBlue['300'],
  },
}));
