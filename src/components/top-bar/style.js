import { styled } from '@mui/system';
import { Box } from '@mui/material';
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
}));
