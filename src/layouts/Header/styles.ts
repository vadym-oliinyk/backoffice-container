import BaseAppBar from '@mui/material/AppBar';
import BaseButton from '@mui/material/Button';
import BaseToolbar from '@mui/material/Toolbar';
import BaseAvatar from '@mui/material/Avatar';

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

export const RightBox = styled('div')`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const AvatarWrap = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.palette.primary.dark};
  font-size: 13px;
`;

export const Avatar = styled(BaseAvatar)`
  width: 30px;
  height: 30px;
`;
