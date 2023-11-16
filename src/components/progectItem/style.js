import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../theme';

export const ProjectsItem = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  height: '100%',
  padding: '20px',
  backgroundColor: theme.palette.secondary.mainReverse,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
export const ProjectName = styled(Box)(() => ({
  fontWeight: '700',
}));
export const ProjectDescription = styled(Box)(() => ({
  fontSize: '14px',
  paddingTop: '8px',
}));
export const ProjectStatus = styled(Box)(({ status, theme }) => ({
  padding: '5px 10px',
  borderRadius: '50px',
  fontSize: '13px',
  fontWeight: '700',
  ...(status === 'completed'
    ? {
        backgroundColor: `rgba(${
          tokens(theme.palette.mode).status.COMPLETED
        }, 0.2)`,
        color: `rgb(${tokens(theme.palette.mode).status.COMPLETED})`,
      }
    : {
        ...(status === 'in progress'
          ? {
              backgroundColor: `rgba(${
                tokens(theme.palette.mode).status.INPROGRESS
              }, 0.2)`,
              color: `rgb(${tokens(theme.palette.mode).status.INPROGRESS})`,
            }
          : {
              backgroundColor: `rgba(${
                tokens(theme.palette.mode).status.OFFTRACK
              }, 0.2)`,
              color: `rgb(${tokens(theme.palette.mode).status.OFFTRACK})`,
            }),
      }),
}));

export const ProjectPriority = styled(Box)(() => ({
  fontSize: '13px',
}));
