import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const RootSectionContent = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  '.main-section-content': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
}));
