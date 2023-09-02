import React from 'react';
import PropTypes from 'prop-types';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

import Button from './Button';

function ToggleButton(props) {
  const iconStyle = {
    pointerEvents: 'none',
  };
  
  const content =
    props.currentTheme === 'dark' ? (
      <CgSun style={iconStyle} size={20} />
    ) : (
      <HiMoon style={iconStyle} size={20} />
    );
  
  return (
    <Button data-toggle={props.toggle} onClick={props.handleToggle}>
      {content}
    </Button>
  );
}

ToggleButton.propTypes = {
  currentTheme: PropTypes.string,
  toggle: PropTypes.string,
  handleToggle: PropTypes.func,
};

export default ToggleButton;
