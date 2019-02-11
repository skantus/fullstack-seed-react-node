import React from 'react';
import { func } from 'prop-types';
import api from 'api';

class List extends React.Component {
  state = {
    dataList: [],
    isLoading: true
  };

  componentDidMount() {
    this.handleFetchDataList();
  }

  handleFetchDataList = async () => {
    const dataList = await api.getContacts();
    this.setState({ dataList, isLoading: false });
  };

  render() {
    return this.props.renderProps(this.state);
  }
}

List.propTypes = {
  renderProps: func.isRequired
};

export default List;
