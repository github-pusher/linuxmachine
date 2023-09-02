import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

function ListItem(props) {
  return (
    <Item style={props.style}>{props.item}</Item>
  );
}

ListItem.propTypes = {
  style: PropTypes.object,
  item: PropTypes.any,
};

export default ListItem;
