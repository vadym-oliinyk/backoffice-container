import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    padding: 0,
    height: '100%',
    border: `1px solid ${theme.palette.divider}`,
    borderTop: 'none',
  },

  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 15px',
    color: theme.palette.primary.dark,
  },

  menuIcon: {
    color: theme.palette.primary.dark,
  },
}));
