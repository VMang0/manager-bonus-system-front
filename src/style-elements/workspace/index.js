import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../theme';

const WorkSpace = styled(Box)(({ theme }) => ({
  background: `${
    theme.palette.mode === 'dark'
      ? tokens(theme.palette.mode).black['500']
      : tokens(theme.palette.mode).grey['100']
  }`,
  borderRadius: '20px 20px 0 0',
  padding: '30px',
}));
export default WorkSpace;
