/* eslint-disable import/no-extraneous-dependencies */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

import Progress from '../../components/Progress/Progress';
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/user';

import { Content, Paper } from './styles';

const Auth = lazy(() => import('../../apps/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const customTheme = createTheme();

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isSignedIn, user, signIn, signOut } = useAuth();

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
        {/* <ThemeProvider> */}
        <div>
          <Header
            onSignOut={signOut}
            isSignedIn={isSignedIn}
            onMenuToggle={toggleMenu}
          />

          <Paper>
            <Menu isOpen={isMenuOpened} />

            <Content>
              <Suspense fallback={<Progress />}>
                <Switch>
                  <Route path="/auth">
                    <Auth onSignIn={onSignIn} />
                  </Route>
                </Switch>
              </Suspense>
            </Content>
          </Paper>
        </div>
        {/* </ThemeProvider> */}
      </StylesProvider>
    </Router>
  );
};

export default App;
