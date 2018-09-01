import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function H1(props) {
  const { children, ...other } = props;

  return (
    <Typography variant="display2" gutterBottom {...other}>
      {children}
    </Typography>
  );
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
