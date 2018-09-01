import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function H3(props) {
  const { children, ...other } = props;

  return (
    <Typography variant="headline" gutterBottom {...other}>
      {children}
    </Typography>
  );
}

H3.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H3;
