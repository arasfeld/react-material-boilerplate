import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import SideNavLink from './SideNavLink';
import messages from './messages';

const styles = theme => ({
  drawerPaper: {
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    width: 250,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  toolbar: theme.mixins.toolbar,
});

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export function SideNav(props) {
  const { classes, mobileOpen, onClose, onOpen } = props;

  const sideNavContent = (
    <List component="nav" disableGutters>
      <SideNavLink
        href="/"
        message={messages.home}
        icon={HomeIcon}
        onClick={onClose}
      />
      <SideNavLink
        href="/features"
        message={messages.features}
        icon={ListIcon}
        onClick={onClose}
      />
    </List>
  );

  return (
    <div>
      <Hidden mdUp>
        <SwipeableDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {sideNavContent}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <div className={classes.toolbar} />
          {sideNavContent}
        </Drawer>
      </Hidden>
    </div>
  );
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  mobileOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideNav);
