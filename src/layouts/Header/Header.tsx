import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './styles';
import { HeaderProps } from './types';

export default function Header({
  isSignedIn,
  onSignOut,
  onMenuToggle,
}: HeaderProps) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          {isSignedIn && (
            <IconButton color="primary" onClick={onMenuToggle}>
              <MenuIcon />
            </IconButton>
          )}

          <Button
            color="primary"
            variant="outlined"
            className={classes.login}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
