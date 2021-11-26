import { User } from '../../types/user';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { AUTH_STORAGE_KEY } from './constants';

export function useAuth() {
  const [user, setUser] = useLocalStorage<User | null>(AUTH_STORAGE_KEY, null);

  function signIn(newUser: User) {
    setUser(newUser);
  }

  function signOut() {
    setUser(null);
  }

  return { isSignedIn: Boolean(user), user, signIn, signOut };
}
