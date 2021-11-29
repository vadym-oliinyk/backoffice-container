import { FC } from 'react';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupIcon from '@mui/icons-material/Group';
import Divider from '@mui/material/Divider';

import { MenuList, MenuItem, ListItemIcon } from './styles';
import { MenuProps } from './types';

const Menu: FC<MenuProps> = ({ isOpen }) => (
  <MenuList>
    <MenuItem>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText>Dashboard</ListItemText>
    </MenuItem>
    <Divider />

    <MenuItem>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText>CMS</ListItemText>
    </MenuItem>
    <Divider />

    <MenuItem>
      <ListItemIcon>
        <EqualizerIcon />
      </ListItemIcon>
      <ListItemText>Advert</ListItemText>
    </MenuItem>
    <Divider />

    <MenuItem>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText>User</ListItemText>
    </MenuItem>
    <Divider />
  </MenuList>
);

export default Menu;
