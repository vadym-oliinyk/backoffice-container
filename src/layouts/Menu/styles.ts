import BaseMenuList from '@mui/material/MenuList';
import BaseMenuItem from '@mui/material/MenuItem';
import BaseListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';

export const MenuList = styled(BaseMenuList)(({ theme }) => ({
  minWidth: 300,
  padding: 0,
  height: '100%',
  border: `1px solid ${theme.palette.divider}`,
  borderTop: 'none',
}));

export const MenuItem = styled(BaseMenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 15px',
  color: theme.palette.primary.dark,
}));

export const ListItemIcon = styled(BaseListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));
