import React from 'react';
import { number, func } from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import { Increment, Decrement } from 'store/actions';
import { content } from './details.module.css';

class Details extends React.Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Grid fluid className={content}>
        <button onClick={() => increment()}>Decrement</button>
        <div>Counter: {counter}</div>
        <button onClick={() => decrement()}>Increment</button>
      </Grid>
    );
  }
}

Details.propTypes = {
  counter: number,
  increment: func.isRequired,
  decrement: func.isRequired
};

const mapStateToProps = ({ counterReducer }) => ({
  counter: counterReducer.counter
});

const mapDispatchToProps = {
  increment: Increment,
  decrement: Decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
