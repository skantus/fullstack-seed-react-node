import React from 'react';
import Home from './Home';

describe('<Home />', () => {
  const wrapper = shallow(<Home tech="react" />);

  it('render <Home /> component as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
