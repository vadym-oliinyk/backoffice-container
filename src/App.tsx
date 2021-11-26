/* eslint-disable import/no-extraneous-dependencies */
import React, { lazy, Suspense, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Progress from './components/Progress/Progress';
import Header from './layouts/Header';
import { useAuth } from './hooks/useAuth';
import { User } from './types/user';

const Auth = lazy(() => import('./apps/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const App = () => {
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

  return (
    <Router history={history}>
      <CssBaseline />

      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={signOut} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <Auth onSignIn={onSignIn} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
