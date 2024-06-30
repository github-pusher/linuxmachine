/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import H1 from '../../components/H1';

import useTranslations from '../../services/i18n/useTranslations';

export default function NotFoundPage() {
  const { t } = useTranslations();
  
  return (
    <article>
      <H1>
        {t.notFoundPageMessage}
      </H1>
    </article>
  );
}
