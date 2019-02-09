import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Details from 'components/Details';
import { Increment, Decrement } from 'store/actions';

class Counter extends React.Component {
  render() {
    const { Increment, Decrement } = this.props;
    return (
      <Row>
        <button onClick={Decrement}>Decrement</button>
        <Col>
          <Details />
        </Col>
        <button onClick={Increment}>Increment</button>
      </Row>
    );
  }
}

Counter.propTypes = {
  Increment: func.isRequired,
  Decrement: func.isRequired
};

const mapDispatchToProps = {
  Increment,
  Decrement
};

export default connect(
  null,
  mapDispatchToProps
)(Counter);
