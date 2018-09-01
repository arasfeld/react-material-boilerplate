import React from 'react';
import PropTypes from 'prop-types';

import MatListItem from '@material-ui/core/ListItem';

function ListItem(props) {
  return <MatListItem>{props.item}</MatListItem>;
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
