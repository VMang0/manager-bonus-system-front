import { styled } from '@mui/system';
import { Badge, Box } from '@mui/material';
import { tokens } from '../../../theme';

export const StyledBadgeAvatars = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  '.avatars-text': {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
    '.avatars-lfp-names-text': {
      fontWeight: 500,
      color: `${theme.palette.secondary.main}`,
    },
    '.avatars-post-text': {
      color: `${theme.palette.custom.main}`,
    },
  },
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: tokens(theme.palette.mode).darkBlue['200'],
    color: tokens(theme.palette.mode).darkBlue['100'],
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
