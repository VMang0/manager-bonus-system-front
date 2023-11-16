import { styled } from '@mui/system';
import { Box } from '@mui/material';

const DarkFon = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1299,
  minHeight: '100%',
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(1px)',
});
export default DarkFon;
