import { FC } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupIcon from '@material-ui/icons/Group';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './styles';
import { MenuProps } from './types';

const Menu: FC<MenuProps> = ({ isOpen }) => {
  const classes = useStyles();

  return (
    <MenuList className={classes.root}>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.menuIcon}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </MenuItem>
      <Divider />

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.menuIcon}>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText>CMS</ListItemText>
      </MenuItem>
      <Divider />

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.menuIcon}>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText>Advert</ListItemText>
      </MenuItem>
      <Divider />

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.menuIcon}>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText>User</ListItemText>
      </MenuItem>
      <Divider />
    </MenuList>
  );
};

export default Menu;
