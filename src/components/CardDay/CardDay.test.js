import React from 'react';
import { shallow } from 'enzyme';
import CardDay from './CardDay';

describe('CardDay component', () => {
  it('converts temp props from Kelvin to Celsius', () => {
    const wrapper = shallow(<CardDay
      date='15 April'
      day='Friday'
      icon='icon'
      weather='Sunny'
      description='sunny with clouds'
      temp={292.15}
      feelsLike={292.15}
      tempMin={279.15}
      tempMax={297.15}
    />);
    expect(wrapper).toMatchSnapshot();
  })
})