import React from 'react';
import App from './App';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('render <App /> component as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });
});
