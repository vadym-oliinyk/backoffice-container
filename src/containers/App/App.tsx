/* eslint-disable import/no-extraneous-dependencies */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Progress from '../../components/Progress/Progress';
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/user';

import { useStyles } from './styles';
import Button from '@material-ui/core/Button';

const Auth = lazy(() => import('../../apps/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isSignedIn, user, signIn, signOut } = useAuth();

  const classes = useStyles();

  useEffect(() => {
    if (!isSignedIn) {
      history.replace('/auth/signin');
    }
  }, [isSignedIn]);

  function onSignIn(newUser: User): void {
    signIn(newUser);
    history.push('/');
  }

  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <Router history={history}>
      <CssBaseline />

      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={signOut}
            isSignedIn={isSignedIn}
            onMenuToggle={toggleMenu}
          />

          <div className={classes.root}>
            <Menu isOpen={isMenuOpened} />

            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <Auth onSignIn={onSignIn} />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
