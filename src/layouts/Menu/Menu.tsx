import { FC } from 'react';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { MenuList, MenuItem, ListItemIcon, Divider, Link } from './styles';
import { MENU_ITEMS_MAP } from './constants';
import { MenuProps } from './types';

const Menu: FC<MenuProps> = ({ isOpen, permissions }) => (
  <MenuList isOpen={isOpen}>
    <MenuItem>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText>Dashboard</ListItemText>
    </MenuItem>
    <Divider />

    {permissions.map((permission) => {
      const { title, href, icon } = MENU_ITEMS_MAP[permission];

      return (
        <>
          <MenuItem>
            <Link to={href}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </Link>
          </MenuItem>
          <Divider />
        </>
      );
    })}
  </MenuList>
);

export default Menu;
