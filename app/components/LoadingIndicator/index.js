import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <LinearProgress />
  </Wrapper>
);

export default LoadingIndicator;
