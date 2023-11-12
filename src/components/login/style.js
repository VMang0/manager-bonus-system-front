import { styled } from '@mui/system';
import { Box } from '@mui/material';
import backgroundImageLight from '../../static/images/log-reg/light-mode.png';
import backgroundImageDark from '../../static/images/log-reg/dark-mode.png';
import { tokens } from '../../theme';

export const AuthStyledComponent = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundImage: `url(${
    theme.palette.mode === 'dark' ? backgroundImageDark : backgroundImageLight
  })`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center center',
}));
export const AuthForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  width: '440px',
  height: '420px',
  background:
    'linear-gradient(132deg, rgba(254.79, 254.79, 254.79, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  borderRadius: '25px',
  padding: '33px 42px',
  '.auth-name': {
    color: tokens(theme.palette.mode).darkerBlue['400'],
    fontSize: '43px',
    textAlign: 'center',
    height: '20%',
  },
  '.bottom-part': {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    flexDirection: 'column',
    height: '25%',
  },
  '.submit-button': {
    width: '50%',
    height: '44px',
    textTransform: 'none',
    backgroundColor: tokens(theme.palette.mode).darkerBlue['400'],
    borderRadius: '18px',
    fontSize: '17px',
    fontWeight: 500,
    border: 'none',
    textAlign: 'center',
    color: tokens(theme.palette.mode).greyLight1['50'],
  },
  '.submit-button:hover': {
    backgroundColor: tokens(theme.palette.mode).darkerBlue.DEFAULT,
  },
  '.input-container': {
    height: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    h4: {
      padding: '0 16px',
      color: tokens(theme.palette.mode).red['600'],
    },
    '.error-input': {
      border: `1px solid ${tokens(theme.palette.mode).red.DEFAULT}`,
    },
  },
}));

export const AuthInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '45px',
  background:
    'linear-gradient(91deg, #FFFCFC 0%, #FFFCFC 0%, rgba(253.94, 253.94, 253.94, 0.80) 100%)',
  borderRadius: '18px',
  border: 'none',
  padding: '11px 16px',
  color: tokens(theme.palette.mode).darkerBlue.DEFAULT,
  fontSize: '16px',
}));
