import { styled } from '@mui/material/styles';

export const Paper = styled('div')(() => ({
  display: 'flex',
  height: 'calc(100% - 64px)',
}));

export const Content = styled('div')(() => ({
  width: '100%',
}));
