import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ForecastBlock from './ForecastBlock';

const mockForecast = [
  {
    dt: 1650067200,
    weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
    main: [{ temp: 284.2, feels_like: 282.98, temp_min: 283.57, temp_max: 284.2 }]
  }, {
    dt: 1650078000,
    weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
    main: [{ temp: 283.24, feels_like: 282.11, temp_min: 282.6, temp_max: 283.24 }]
  }, {
    dt: 1650088800,
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04n'}],
    main: [{ temp: 286.01, feels_like: 284.79, temp_min: 286.01, temp_max: 286.01 }]
  },

  {
    dt: 1650099600,
    weather: [{ main: 'Clouds', description: 'overcast clouds', icon: '04n'}],
    main: [{ temp: 290, feels_like: 289.05, temp_min: 290, temp_max: 2901 }]
  }
];

describe('ForecastBlock component', () => {
  afterEach(cleanup);

  it('matches the snapshot', () => {
    const wrapper = shallow(<ForecastBlock forecast={mockForecast} />);
    expect(wrapper).toMatchSnapshot();
  });
})