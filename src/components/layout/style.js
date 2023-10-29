import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const RootSectionContent = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  '.main-section-content': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flex: 1,
  },
}));
export const ChoosenPage = styled(Box)(() => ({
  width: '100%',
  flex: 1,
}));

export const LayoutComponentStyled = styled(Box)(() => ({
  minHeight: '100vh',
}));
