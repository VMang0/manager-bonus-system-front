import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../theme';

export const ProjectViewFormStyled = styled(Box)(({ theme }) => ({
  maxHeight: '100vh',
  background: `${theme.palette.mode === 'dark' ? '#121212' : '#fff'}`,
  border: `1px solid ${theme.palette.custom.secondary}`,
  padding: '40px',
  borderRadius: '20px',
  overflowY: 'auto',
  width: '40%',
  '.btn-container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'right',
    paddingTop: '20px',
    '.cancel': {
      margin: 0,
      p: {
        padding: 0,
      },
    },
  },
}));
export const ViewForm = styled(Box)(({ theme }) => ({
  h1: {
    fontSize: '30px',
  },
  h2: {
    fontSize: '15px',
    color: tokens(theme.palette.mode).grey['700'],
  },
  '.stack': {
    paddingBottom: '20px',
    alignItems: 'center',
  },
  '.teams-container': {
    border: `1px solid ${theme.palette.custom.secondary}`,
    borderRadius: '20px',
    padding: '10px',
    '.MuiChip-root': {
      marginBottom: '10px',
      marginRight: '10px',
    },
  },
}));

export const ProjectPriorityView = styled(Box)(({ priority, theme }) => ({
  padding: '5px 10px',
  borderRadius: '50px',
  fontSize: '13px',
  fontWeight: '700',
  ...(priority === 'critical'
    ? {
        backgroundColor: `rgba(${
          tokens(theme.palette.mode).status.CRITIC
        }, 0.2)`,
        color: `rgb(${tokens(theme.palette.mode).status.CRITIC})`,
      }
    : {
        ...(priority === 'strategic'
          ? {
              backgroundColor: `rgba(${
                tokens(theme.palette.mode).status.STRATEG
              }, 0.2)`,
              color: `rgb(${tokens(theme.palette.mode).status.STRATEG})`,
            }
          : {
              backgroundColor: `rgba(${
                tokens(theme.palette.mode).status.HIGH
              }, 0.2)`,
              color: `rgb(${tokens(theme.palette.mode).status.HIGH})`,
            }),
      }),
}));
