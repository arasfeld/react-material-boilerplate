import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Wrapper from './Wrapper';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function Header({ classes, toggleSideNav }) {
  return (
    <Wrapper>
      <AppBar position="absolute" className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.navIconHide}
            onClick={toggleSideNav}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
