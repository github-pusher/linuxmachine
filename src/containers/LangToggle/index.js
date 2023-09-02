/*
 *
 * LanguageToggle
 *
 */

import React from 'react';

import useTranslations from '../../services/i18n/useTranslations';

import Toggle from '../../components/Toggle';
import Wrapper from './Wrapper';

export function LangToggle() {
  const { lang, supportedLangs, setLang } =
    useTranslations();
  
  return (
    <Wrapper>
      <Toggle
        value={lang}
        values={supportedLangs}
        onToggle={(event) => setLang(event.target.value)}
      />
    </Wrapper>
  );
}

export default LangToggle;
