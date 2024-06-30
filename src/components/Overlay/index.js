import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledOverlay from './StyledOverlay';

function Overlay(props) {
  return (
    <StyledOverlay className={classnames({ active: props.active })} />
  );
}

Overlay.propTypes = {
  active: PropTypes.bool,
};

export default Overlay;
