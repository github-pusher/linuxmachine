/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import ToggleOption from '../ToggleOption';

function Toggle(props) {
  let content = <option>--</option>;
  
  if (props.values) {
    content = Object.entries(props.values).map(
      ([code, name]) => (
        <ToggleOption key={code} value={code} message={name} />
      ),
    )
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.object,
  value: PropTypes.string,
};

export default Toggle;
