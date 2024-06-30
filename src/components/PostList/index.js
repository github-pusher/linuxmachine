import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import LoadingIndicator from '../../components/LoadingIndicator';
import PostListItem from '../../containers/PostListItem';

import useTranslations from '../../services/i18n/useTranslations';

function PostList({ loading, error, posts }) {
  const { t } = useTranslations();
  
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <ListItem style={{ padding: "10px 18px" }} item={t.postListErrorMessage} />
    );
    return <List component={ErrorComponent} />;
  }

  if (posts.length > 0) {
    const reversedPosts = [...posts].reverse();
    return <List items={reversedPosts} component={PostListItem} />;
  }
  
  const MessageComponent = () => (
    <ListItem style={{ padding: "10px 18px" }} item={t.postListInfoMessage} />
  );

  return <List component={MessageComponent} />;
}

PostList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  posts: PropTypes.any,
};

export default PostList;
