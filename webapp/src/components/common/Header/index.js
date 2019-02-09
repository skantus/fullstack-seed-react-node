import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';

/* eslint-disable react/prop-types */
export const Header = ({ children, routes = [] }) => (
  <Wrapper>
    <section>
      <nav>
        <ul>
          {routes.map(({ path, title }, index) => (
            <li key={index}>
              <Link to={path}>{path.replace('/', '')}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      {children}
    </section>
  </Wrapper>
);
