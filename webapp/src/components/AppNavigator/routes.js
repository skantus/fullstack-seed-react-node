import React from 'react';
import Login from 'components/Login';
import Home from 'components/Home';

const Public = () => <h1 align="center">Public Component</h1>;

export const signOutRoutes = {
  routes: [
    {
      path: '/login',
      component: Login,
      title: 'Sign In'
    },
    {
      path: '/public',
      component: Public,
      title: 'Public'
    }
  ],
  initialRoute: Login
};

export const signInRoutes = {
  routes: [
    {
      path: '/home',
      component: Home
    }
  ],
  initialRoute: Home
};
