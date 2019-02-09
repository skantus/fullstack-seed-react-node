import React from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import { withStyles, Button } from '@material-ui/core';
import { LogoutUser } from 'store/actions';
import Details from 'components/Details';
import { styles } from './styles';
import { content } from './home.module.css';

class Home extends React.Component {
  render() {
    const { classes, logoutUser } = this.props;
    return (
      <Grid fluid className={content}>
        <Details />
        <Button color="primary" className={classes.button} onClick={() => logoutUser()}>
          Logout
        </Button>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: object.isRequired,
  logoutUser: func.isRequired
};

const HomeComponent = withStyles(styles)(Home);

const mapDispatchToProps = {
  logoutUser: LogoutUser
};

export default connect(
  null,
  mapDispatchToProps
)(HomeComponent);
