import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'components/common/Header';

/* eslint-disable react/prop-types */
const StackNavigator = ({ initialRoute: InitialRoute, routes }) => {
  return (
    <Header routes={routes}>
      <Switch>
        {routes.map(({ path, component }, index) => (
          <Route path={path} component={component} key={index} />
        ))}
        <Route render={() => <InitialRoute />} />
      </Switch>
    </Header>
  );
};

export default StackNavigator;
