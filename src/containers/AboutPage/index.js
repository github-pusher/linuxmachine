import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import NormalH3 from '../../components/H3';
import Wrapper from './Wrapper';
import Content from './Content';
import ContentText from './ContentText';
import A from './A';
import LoadableImage from './LoadableImage';
import Me from './me.jpeg';
import WrapperAddition from './WrapperAddition';
import ContentAddition from './ContentAddition';
import H3 from './H3';
import ContentTextAddition from './ContentTextAddition';

import useTranslations from '../../services/i18n/useTranslations';

export default function AboutPage() {
  const { t } = useTranslations();
  
  return (
    <Fragment>
      <Helmet>
        <title>{t.aboutTitle}</title>
        <meta
          name="description"
          content="About page"
        />
      </Helmet>
      <Wrapper>
        <Content>
          <NormalH3>
            {t.aboutHeader}
          </NormalH3>
          <ContentText>
            {t.aboutMessage}
          </ContentText>
          <A target="_blank" href={`${process.env.REACT_APP_TELEGRAM_LINK}`}>
            {t.aboutButton}
          </A>
        </Content>
        <LoadableImage src={Me} alt="me" />
      </Wrapper>
      <WrapperAddition>
        <ContentAddition>
          <H3>
            {t.aboutHeaderAddition}
          </H3>
          <ContentTextAddition dangerouslySetInnerHTML={{__html:t.aboutMessageAddition}} />
        </ContentAddition>
      </WrapperAddition>
    </Fragment>
  );
}
