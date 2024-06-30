import React from 'react';

import Aside from './Aside';

import useTranslations from '../../services/i18n/useTranslations';

function Sidebar() {
  const { t } = useTranslations();
  
  return (
    <Aside />
  );
}

export default Sidebar;
