import BaseAppBar from '@mui/material/AppBar';
import BaseButton from '@mui/material/Button';
import BaseToolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

export const AppBar = styled(BaseAppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Toolbar = styled(BaseToolbar)(() => ({
  width: '100%',
}));

export const Button = styled(BaseButton)(() => ({
  '&.MuiButton-root': {
    marginLeft: 'auto',
  },
}));
