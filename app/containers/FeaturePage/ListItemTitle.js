import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function ListItemTitle(props) {
  const { children, ...other } = props;

  return (
    <Typography variant="subheading" paragraph {...other}>
      {children}
    </Typography>
  );
}

ListItemTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItemTitle;
