import React from 'react';
import List from './index';

const CHARTS_URL = 'https://storage.googleapis.com/bulb-interview/meterReadingsReal.json';

describe('<List />', () => {
  const renderMock = jest.fn();
  const props = {
    renderProps: renderMock
  };

  const wrapper = shallow(<List {...props} />);
  const { props: propsList, state } = wrapper.instance();

  it('render <List /> component as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render propTypes required correctly', () => {
    expect(propsList).toEqual(props);
  });

  it('should return a valid response from request url', async () => {
    const { type, status, ok, statusText, url } = await fetch(CHARTS_URL);
    expect(type).toEqual('default');
    expect(status).toEqual(200);
    expect(ok).toBeTruthy();
    expect(statusText).toBe('OK');
    expect(url).toEqual(CHARTS_URL);
  });

  it('should response have 14 items', async () => {
    const api = await fetch(CHARTS_URL);
    const json = await api.json();
    expect(json).toBeDefined();
    expect(json.electricity).toHaveLength(14);
  });

  it('should the renderProp to be defined', () => {
    expect(propsList.renderProps).toBeDefined();
  });

  it('isLoading prop should start in true', () => {
    expect(state.isLoading).toBeTruthy();
  });
});
