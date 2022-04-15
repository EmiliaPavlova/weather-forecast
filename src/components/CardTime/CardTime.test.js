import React from 'react';
import { shallow } from 'enzyme';
import CardTime from './CardTime';

describe('CardTime component', () => {
  it('converts temp props from Kelvin to Celsius', () => {
    const wrapper = shallow(<CardTime
      time='17'
      icon='icon'
      description='sunny with clouds'
      temp={292.15}
      feelsLike={292.15}
    />);
    expect(wrapper).toMatchSnapshot();
  })
})