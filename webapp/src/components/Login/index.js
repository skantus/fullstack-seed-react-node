import React, { useState } from 'react';
import { object, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Typography, Input, Button } from '@material-ui/core';
import { LoginUser } from 'store/actions';
import { styles } from './styles';
import { content } from './login.module.css';

const Login = ({ classes, loginUser, hasError, isLogged }) => {
  const [credentials, setLogin] = useState({ email: 'a@a.com', password: '1234' });
  return (
    <div className={content}>
      <div className={classes.container}>
        {isLogged ? (
          <Typography component="h2" variant="display1" align="center" gutterBottom>
            You are logged!
          </Typography>
        ) : (
          <>
            <Typography component="h2" variant="display1" align="center" gutterBottom>
              Login
            </Typography>
            <Input
              placeholder="Enter your email"
              defaultValue={credentials.email}
              error={hasError}
              className={classes.input}
              onChange={({ target: { value } }) => setLogin({ ...credentials, email: value })}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder="Enter your password"
              defaultValue={credentials.password}
              type="password"
              error={hasError}
              className={classes.input}
              onChange={({ target: { value } }) => setLogin({ ...credentials, password: value })}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Button color="primary" className={classes.button} onClick={() => credentials && loginUser(credentials)}>
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

Login.propTypes = {
  classes: object.isRequired,
  loginUser: func.isRequired,
  hasError: bool.isRequired,
  isLogged: bool.isRequired
};

const LoginComponent = withStyles(styles)(Login);

const mapStateToProps = ({ session: { isLogged, hasError } }) => ({
  isLogged,
  hasError
});

const mapDispatchToProps = {
  loginUser: LoginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
