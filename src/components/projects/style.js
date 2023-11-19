import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { tokens } from '../../theme';

export const StyledProjectsComponent = styled(Box)(() => ({
  minHeight: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr minmax( auto, 18.4%)',
  gridGap: '10px',
  padding: '0 15px',
}));

export const GridStyled = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  '.grid-container': {
    background: `${
      theme.palette.mode === 'dark'
        ? tokens(theme.palette.mode).black['500']
        : tokens(theme.palette.mode).grey['100']
    }`,
    borderRadius: '20px 20px 0 0',
    padding: '30px',
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '1.5rem',
    gridAutoRows: '300px',
    height: '100%',
  },
  '.adaptive-grid': {
    height: 'auto',
  },
}));

export const ProjectStatistic = styled(Box)(() => ({
  padding: '10px',
  '.statistic-text': {
    fontWeight: '700',
    paddingBottom: '20px',
  },
}));

export const StatisticItem = styled(Box)(({ theme, name }) => ({
  fontSize: '12px',
  '.statistic-item': {
    justifyContent: 'normal',
    paddingTop: '5px',
  },
  '.statistic-number': {
    fontSize: '22px',
    fontWeight: '700',
    paddingLeft: '10px',
  },
  '.statistic-icon': {
    transform: 'rotate(90deg)',
    fontSize: '30px',
    ...(name === 'Completed'
      ? {
          color: `rgb(${tokens(theme.palette.mode).status.COMPLETED})`,
        }
      : {
          ...(name === 'In progress'
            ? {
                color: `rgb(${tokens(theme.palette.mode).status.INPROGRESS})`,
              }
            : {
                ...(name === 'Off track'
                  ? {
                      color: `rgb(${
                        tokens(theme.palette.mode).status.OFFTRACK
                      })`,
                    }
                  : {
                      color: tokens(theme.palette.mode).darkBlue['200'],
                    }),
              }),
        }),
  },
}));
