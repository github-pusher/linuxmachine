import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Popup from '../../components/Popup';
import ListItem from '../../components/ListItem';
import Wrapper from './Wrapper';
import ItemTitle from './ItemTitle';
import ItemStatus from './ItemStatus';
import Circle from './Circle';
import ButtonWrapper from './ButtonWrapper';
import { store } from '../../app/store';

import { setOverlay } from './postListItemSlice';

import useTranslations from '../../services/i18n/useTranslations';

export function PostListItem(props) {
  const { t } = useTranslations();
  const [openPopup, setPopupOpen] = useState(false);
  
  const { item } = props;
  
  const post = props.item['edited_channel_post'] || props.item['channel_post'] || undefined;
  
  function truncate(str, no_words) {
    return str.split(' ').splice(0, no_words).join(' ');
  }
  
  const handleOnClick = () => {
    setPopupOpen(true);
    store.dispatch(setOverlay(true));
  }
  
  const handleOnClosePopup = () => {
    setPopupOpen(false);
    store.dispatch(setOverlay(false));
  }
  
  if (post !== undefined) {
    const content = post['text'] || undefined;
    
    if (content !== undefined) {
      const component = (
        <Wrapper>
          <ItemTitle>
            {truncate(content, 3)}...
          </ItemTitle>
          <ItemStatus>
            <Circle className={classnames({ green: item['edited_channel_post'] !== undefined })} />
            {item['edited_channel_post'] !== undefined ? t.diaryStatusUpdated : t.diaryStatusNew}
          </ItemStatus>
          <ButtonWrapper>
            <Button onClick={handleOnClick}>
              {t.postListItemButton}
            </Button>
            <Popup
              truncateContent={truncate(content, 3)}
              content={content}
              visible={openPopup}
              handleOnClose={handleOnClosePopup}
            />
          </ButtonWrapper>
        </Wrapper>
      );
      
      return <ListItem key={`post-list-item-${item['update_id']}`} item={component} />;
    }
  }
}

PostListItem.propTypes = {
  item: PropTypes.object,
};

export default PostListItem;
