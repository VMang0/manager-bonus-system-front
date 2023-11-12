import { styled } from '@mui/system';
import { tokens } from '../../theme';
import { Box } from '@mui/material';

const inputStyle = ({ theme }) => ({
  width: '100%',
  height: '45px',
  background: `${
    theme.palette.mode === 'dark'
      ? tokens(theme.palette.mode).black['500']
      : tokens(theme.palette.mode).grey['100']
  }`,
  borderRadius: '18px',
  border: 'none',
  padding: '11px 16px',
  fontSize: '15px',
  '&:-webkit-autofill': {
    background: `${
      theme.palette.mode === 'dark'
        ? tokens(theme.palette.mode).black['500']
        : tokens(theme.palette.mode).grey['100']
    }`,
  },
});
const inputTextStyle = ({ theme }) => ({
  color: 'inherit',
  fontSize: '15px',
  '&::placeholder': {
    color: tokens(theme.palette.mode).grey['600'],
    fontSize: '15px',
  },
});

export const StyledUserInfoForm = styled(Box)(({ theme }) => ({
  width: '75%',
  margin: '0 auto',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? tokens(theme.palette.mode).black['500']
      : tokens(theme.palette.mode).grey['300']
  }`,
  background: `${theme.palette.mode === 'dark' ? '#121212' : '#fff'}`,
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  '.btn-verification': {
    width: '70%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    height: '45px',
  },
}));

export const InfoForm = styled('form')(() => ({
  padding: '20px 40px',
  width: '100%',
  '.custom-datepicker': {
    width: '49%',
  },
}));

export const InputContainer = styled(Box)(({ theme }) => ({
  height: '70px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '.MuiFormControl-root': {
    borderRadius: '18px',
  },
  '.MuiFormLabel-root': {
    top: '-5px',
    ...inputTextStyle({ theme }),
  },
  '.MuiInputBase-root': {
    ...inputStyle({ theme }),
  },
  '.selected-option': {
    ...inputStyle({ theme }),
    ...inputTextStyle({ theme }),
  },
  '.options': {
    background: `${
      theme.palette.mode === 'dark'
        ? tokens(theme.palette.mode).black['500']
        : tokens(theme.palette.mode).grey['100']
    }`,
    ...inputTextStyle({ theme }),
  },
  '.active-selected-option': {
    borderRadius: '18px 18px 0 0',
  },
  '.options li': {
    color: 'inherit',
  },
  '.options li:hover': {
    background: `${
      theme.palette.mode === 'dark'
        ? tokens(theme.palette.mode).black['400']
        : tokens(theme.palette.mode).grey['300']
    }`,
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  h4: {
    fontSize: '12px',
    padding: '4px 16px',
    color: tokens(theme.palette.mode).red['600'],
  },
  '.error-input': {
    border: `1px solid ${tokens(theme.palette.mode).red.DEFAULT}`,
  },
}));

export const StyledInput = styled('input')(({ theme }) => ({
  ...inputStyle({ theme }),
  ...inputTextStyle({ theme }),
}));
