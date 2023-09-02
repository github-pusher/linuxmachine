import React from 'react';

import Aside from './Aside';
import Wrapper from './Wrapper';
import Heading from './Heading';

import useTranslations from '../../services/i18n/useTranslations';

function Sidebar() {
  const { t } = useTranslations();
  
  return (
    <Aside>
      <Wrapper>
        <Heading>
          {t.sidebarHeader}
        </Heading>
      </Wrapper>
    </Aside>
  );
}

export default Sidebar;
