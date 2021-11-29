import { Permission } from 'src/types/permissions';

export interface MenuProps {
  isOpen: boolean;
  permissions: Permission[];
}

export interface MenuListStyledProps {
  isOpen: boolean;
}
