import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import StackNavigator from './StackNavigator';
import { signInRoutes, signOutRoutes } from './routes';

/* eslint-disable react/prop-types */
const AuthRouter = ({ isLogged }) => {
  const { initialRoute, routes } = isLogged ? { ...signInRoutes } : { ...signOutRoutes };
  return <StackNavigator initialRoute={initialRoute} routes={routes} />;
};

const MainStackNavigator = props => <Route component={() => AuthRouter({ ...props })} />;

MainStackNavigator.propTypes = {
  isLogged: bool.isRequired
};

const mapStateToProps = ({ session: { isLogged } }) => ({
  isLogged
});

export default withRouter(connect(mapStateToProps)(MainStackNavigator));
