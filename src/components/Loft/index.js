import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

import Wrapper from './Wrapper';
import Social from './Social';
import A from './A';
import Copyright from './Copyright';

export default function Loft() {
  return (
    <Wrapper>
      <Copyright>
        Copyright © linuxmachine.ru 2023
      </Copyright>
      <Social>
        <A target="_blank" href="https://www.instagram.com/linuxmachine/">
          <FaInstagram />
        </A>
      </Social>
    </Wrapper>
  );
}
