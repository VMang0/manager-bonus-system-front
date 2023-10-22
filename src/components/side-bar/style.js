import { styled } from '@mui/system';
import { Drawer } from '@mui/material';
import { tokens } from '../../theme';

export const DrawerComponent = styled(Drawer)(({ theme, drawerwidth }) => ({
  width: `${drawerwidth}px`,
  flexDirection: 'column',
  transition: 'width 0.5s',
  overflowX: 'hidden',
  '.container-chevron': {
    display: 'flex',
    justifyContent: 'end',
  },
  '.width': {
    width: '100%',
    '.container-logo': {
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px 15px 20px',
      minHeight: '50px',
    },
  },
  '& .MuiDrawer-paper': {
    color: theme.palette.secondary.main,
    boxSizing: 'border-box',
    width: `${drawerwidth}px`,
    transition: 'width 0.5s',
    overflowX: 'hidden',
  },
  '& li': {
    padding: 0,
    minHeight: '50px',
    boxSizing: 'border-box',
    '.list-item-icon': {
      minWidth: 'auto',
    },
    '.list-item-text': {
      marginLeft: '15px',
    },
    '.MuiButtonBase-root': {
      margin: '8px 20px',
      padding: 0,
    },
    '.MuiButtonBase-root:hover': {
      backgroundColor: 'transparent',
    },
  },
  '.active-link, li:hover': {
    borderLeft: `3px solid ${tokens(theme.palette.mode).darkBlue['200']}`,
    backgroundColor: `rgba(221,238,255, 0.1)`,
    color: tokens(theme.palette.mode).darkBlue['50'],
    '.MuiButtonBase-root': {
      margin: '8px 20px 8px 17.5px',
    },
    '.list-item-icon': {
      color: tokens(theme.palette.mode).darkBlue['100'],
    },
  },
}));
