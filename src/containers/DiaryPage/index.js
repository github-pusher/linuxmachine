import React from 'react';
import { Helmet } from 'react-helmet';
import { SiTelegram } from 'react-icons/si';

import { useGetPostsQuery } from '../Api/apiSlice';

import PostList from '../../components/PostList';
import Wrapper from './Wrapper';
import Heading from './Heading';
import ArchiveLinkWrapper from './ArchiveLinkWrapper';
import A from './A';

import useTranslations from '../../services/i18n/useTranslations';

export default function DiaryPage() {
  const { t } = useTranslations();
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  let postContent;

  if (isLoading) {
    postContent = <PostList loading={isLoading} />
  } else if (isSuccess) {
    postContent = <PostList posts={posts['result']} />
  } else if (isError) {
    postContent = <PostList error={error} />
  }
  
  return (
    <Wrapper>
      <Helmet>
        <title>{t.diaryTitle}</title>
        <meta
          name="description"
          content="Diary page"
        />
      </Helmet>
      <Heading>
        {t.diaryHeader}
      </Heading>
      {postContent}
      <ArchiveLinkWrapper>
        <A target="_blank" href={`${process.env.REACT_APP_TELEGRAM_CHANNEL_LINK}`}>
          <SiTelegram />
          {t.diaryArchiveButton}
        </A>
      </ArchiveLinkWrapper>
    </Wrapper>
  );
}
