import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

function ThemingProvider(props) {
  return (
    <ThemeProvider theme={props.themes[props.themeName]}>
      {React.Children.only(props.children)}
    </ThemeProvider>
  );
}

ThemingProvider.propTypes = {
  themes: PropTypes.object,
  themeName: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => ({
  themeName: state.themingProvider.themeName,
});

export default connect(mapStateToProps)(ThemingProvider);
