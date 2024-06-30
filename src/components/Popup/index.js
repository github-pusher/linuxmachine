import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CgCloseO } from 'react-icons/cg';

import Wrapper from './Wrapper';
import Title from './Title';
import Close from './Close';
import Subtitle from './Subtitle';

function Popup(props) {
  const iconStyle = {
    marginRight: '0',
    width: '24px',
  }
  
  return (
    <Wrapper className={classnames({ visible: props.visible })}>
      <Title>
        {props.truncateContent}...
        <Close onClick={props.handleOnClose}>
          <CgCloseO style={iconStyle} size={20} />
        </Close>
      </Title>
      <Subtitle>
        {props.content}
      </Subtitle>
      <Close className="fullWidth" onClick={props.handleOnClose}>
        <CgCloseO style={iconStyle} size={20} />
      </Close>
    </Wrapper>
  );
}

Popup.propTypes = {
  truncateContent: PropTypes.string,
  content: PropTypes.string,
  visible: PropTypes.bool,
  handleOnClose: PropTypes.func,
};

export default Popup;
