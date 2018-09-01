import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function H2(props) {
  const { children, ...other } = props;

  return (
    <Typography variant="display1" gutterBottom {...other}>
      {children}
    </Typography>
  );
}

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H2;
