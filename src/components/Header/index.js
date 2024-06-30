import React from 'react';

import Wrapper from './Wrapper';
import NavbarBrand from './NavbarBrand';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

import useTranslations from '../../services/i18n/useTranslations';

function Header() {
  const { t } = useTranslations();
  
  return (
    <Wrapper>
      <NavbarBrand to="/">
        LINUXMACHINE
      </NavbarBrand>
      <NavBar>
        <HeaderLink to="/about">
          {t.about}
        </HeaderLink>
        <HeaderLink to="/work">
          {t.work}
        </HeaderLink>
        <HeaderLink to="/diary">
          {t.diary}
        </HeaderLink>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
