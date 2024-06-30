import React from 'react';
import { SiTelegram } from 'react-icons/si';

import Wrapper from './Wrapper';
import Social from './Social';
import A from './A';
import Copyright from './Copyright';

export default function Loft() {
  return (
    <Wrapper>
      <Copyright>
        Copyright © {process.env.REACT_APP_DOMAIN_NAME} 2023
      </Copyright>
      <Social>
        <A target="_blank" href={`${process.env.REACT_APP_TELEGRAM_LINK}`}>
          <SiTelegram />
        </A>
      </Social>
    </Wrapper>
  );
}
