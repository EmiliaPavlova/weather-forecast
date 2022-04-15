import { cleanup } from '@testing-library/react';
import { convertToCelsius } from './utils';

describe('Utils', () => {
  afterEach(cleanup);
  it('converts temp props from Kelvin to Celsius', () => {
   expect(convertToCelsius(297.15)).toEqual('24');
  })
})