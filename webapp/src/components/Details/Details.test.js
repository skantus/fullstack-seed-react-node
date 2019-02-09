import React from 'react';
import Details from './Details';

describe('<Details />', () => {
  const wrapper = shallow(<Details tech="react" />);

  it('render <Details /> component as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
