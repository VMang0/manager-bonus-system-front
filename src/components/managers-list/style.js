import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const ManagerListStyled = styled(Box)(() => ({
  padding: '0 15px',
  height: '100%',
  '.workspace-manager-list': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  '.btn-manager-list': {
    marginRight: 0,
  },
}));

export const WorkPanel = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'right',
  paddingBottom: '10px',
}));
