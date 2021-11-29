import BaseMenuList from '@mui/material/MenuList';
import BaseMenuItem from '@mui/material/MenuItem';
import BaseListItemIcon from '@mui/material/ListItemIcon';
import { NavLink as BaseLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { MenuListStyledProps } from './types';

export const MenuList = styled(BaseMenuList, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<MenuListStyledProps>(({ theme, isOpen }) => ({
  width: isOpen ? 350 : 0,
  padding: 0,
  height: '100%',
  border: `1px solid ${theme.palette.divider}`,
  borderTop: 'none',
  transition: 'width 0.3s',
  overflow: 'hidden',
}));

export const MenuItem = styled(BaseMenuItem)(({ theme }) => ({
  padding: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ListItemIcon = styled(BaseListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export const Link = styled(BaseLink)`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 17px 15px;
  color: ${({ theme }) => theme.palette.primary.dark};

  &.active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.grey[100]};

    & .MuiListItemIcon-root {
      color: ${({ theme }) => theme.palette.grey[100]};
    }
  }
`;
