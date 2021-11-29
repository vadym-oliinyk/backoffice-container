import { FC } from 'react';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { MenuList, MenuItem, ListItemIcon, Link } from './styles';
import { MENU_ITEMS_MAP } from './constants';
import { MenuProps } from './types';

const Menu: FC<MenuProps> = ({ isOpen, permissions }) => (
  <MenuList isOpen={isOpen}>
    <MenuItem>
      <Link to="/" exact>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </Link>
    </MenuItem>

    {permissions.map((permission) => {
      const { title, href, icon } = MENU_ITEMS_MAP[permission];

      return (
        <MenuItem key={title}>
          <Link to={href}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{title}</ListItemText>
          </Link>
        </MenuItem>
      );
    })}
  </MenuList>
);

export default Menu;
