import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }: any) => {
  const authRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    const { current } = authRef;
    if (!current) {
      return;
    }

    const { onParentNavigate } = mount(current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={authRef} />;
};

export default AuthApp;
