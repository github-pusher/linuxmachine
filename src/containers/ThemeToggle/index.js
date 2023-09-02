import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setThemeName
} from '../ThemingProvider/themingProviderSlice';

import ToggleButton from '../../components/ToggleButton';
import { store } from '../../app/store';

function ThemeToggle(props) {
  const toggle = props.themeName === 'dark' ? 'light' : 'dark';
  
  const handleThemeToggle = (event) => {
    store.dispatch(setThemeName(event.target.dataset.toggle));
  }
  
  return (
    <ToggleButton
      currentTheme={props.themeName}
      toggle={toggle}
      handleToggle={handleThemeToggle}
    />
  );
}

ThemeToggle.propTypes = {
  themeName: PropTypes.string,
  onThemeToggle: PropTypes.func,
};

const mapStateToProps = (state) => ({
  themeName: state.themingProvider.themeName,
});

export default connect(mapStateToProps)(ThemeToggle);
