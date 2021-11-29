import { styled } from '@mui/material/styles';

export const Bar = styled('div')(({ theme }) => ({
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));
