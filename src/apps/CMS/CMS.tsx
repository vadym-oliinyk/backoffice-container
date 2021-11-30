import { mount } from 'cms/CMSApp';
import React, { useRef, useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';

import { CMSAppProps } from './types';
import { Wrapper } from './styles';

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

  return (
    <Wrapper>
      <div ref={CMSRef} />
    </Wrapper>
  );
};

export default CMSApp;
