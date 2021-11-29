import { mount } from 'cms/CMSApp';
import React, { useRef, useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';

import { CMSAppProps } from './types';

const CMSApp: FC<CMSAppProps> = ({ userToken }) => {
  const CMSRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    const { current } = CMSRef;
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
      userToken,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={CMSRef} />;
};

export default CMSApp;
