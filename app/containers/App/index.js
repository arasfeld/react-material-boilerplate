/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideNav from 'components/SideNav';
import Content from './Content';
import Main from './Main';
import Wrapper from './Wrapper';

const styles = theme => ({
  page: {
    flex: '1 auto',
    margin: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { mobileOpen } = this.state;
    const { classes } = this.props;

    return (
      <Wrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header toggleSideNav={this.handleDrawerOpen} />
        <Content>
          <SideNav
            mobileOpen={mobileOpen}
            onClose={this.handleDrawerClose}
            onOpen={this.handleDrawerOpen}
          />
          <Main>
            <div className={classes.page}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/features" component={FeaturePage} />
                <Route path="" component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </Main>
        </Content>
      </Wrapper>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
