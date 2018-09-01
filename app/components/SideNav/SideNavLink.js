import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  item: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function SideNavLink(props) {
  const { classes, href, message, icon, onClick, intl } = props;

  const IconComponent = icon;

  return (
    <ListItem
      button
      component={NavLink}
      to={href}
      className={classes.item}
      activeClassName={classes.active}
      onClick={onClick}
    >
      <ListItemIcon>
        <IconComponent />
      </ListItemIcon>
      <ListItemText
        style={{ color: 'inherit' }}
        primary={message ? intl.formatMessage(message) : href}
      />
    </ListItem>
  );
}

SideNavLink.propTypes = {
  classes: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  message: PropTypes.object,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(SideNavLink));
