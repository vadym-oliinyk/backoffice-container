import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Button, Toolbar } from './styles';
import { HeaderProps } from './types';

export default function Header({
  isSignedIn,
  onSignOut,
  onMenuToggle,
}: HeaderProps) {
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          {isSignedIn && (
            <IconButton color="primary" onClick={onMenuToggle}>
              <MenuIcon />
            </IconButton>
          )}

          <Button color="primary" variant="outlined" onClick={onClick}>
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
