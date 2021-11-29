import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupIcon from '@mui/icons-material/Group';

import { Permission } from '../../types/permissions';

export const MENU_ITEMS_MAP = {
  [Permission.Content]: {
    title: 'CMS',
    icon: <LibraryBooksIcon />,
    href: '/',
  },
  [Permission.Advert]: {
    title: 'Advert',
    icon: <EqualizerIcon />,
    href: '/',
  },
  [Permission.Users]: {
    title: 'Users',
    icon: <GroupIcon />,
    href: '/',
  },
};
