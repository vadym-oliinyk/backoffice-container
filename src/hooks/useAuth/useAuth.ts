import { useState } from 'react';

import { AUTH_STORAGE_KEY } from './constants';

export function useAuth() {
  const initialIsSignIn = Boolean(localStorage.getItem(AUTH_STORAGE_KEY));
  const [isSignedIn, setIsSignedIn] = useState(initialIsSignIn);

  function signIn() {
    setIsSignedIn(true);
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
  }

  function signOut() {
    setIsSignedIn(false);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  return { isSignedIn, signIn, signOut };
}
