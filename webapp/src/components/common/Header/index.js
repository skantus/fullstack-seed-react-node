import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutUser } from 'store/actions';
import { Wrapper, Button } from './style';

/* eslint-disable react/prop-types */
const Header = ({ children, routes = [], isLogged, logoutUser }) => (
  <Wrapper>
    <section>
      <nav>
        <ul>
          {routes.map(
            ({ path, title }, index) =>
              title && (
                <li key={index}>
                  <Link to={path}>{title}</Link>
                </li>
              )
          )}
          {isLogged && <Button onClick={() => logoutUser()}>Logout</Button>}
        </ul>
      </nav>
      <hr />
      {children}
    </section>
  </Wrapper>
);

Header.propTypes = {
  isLogged: bool.isRequired,
  logoutUser: func.isRequired
};

const mapDispatchToProps = {
  logoutUser: LogoutUser
};

const mapStateToProps = ({ session: { isLogged } }) => ({
  isLogged
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
