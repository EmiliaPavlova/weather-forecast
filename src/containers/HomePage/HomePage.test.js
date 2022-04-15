import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent
} from '@testing-library/react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage component', () => {
  afterEach(cleanup);

  it('matches the snapshot', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  })

  it('calls getLocation on button click', async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(success({
          coords: { latitude: 51.1, longitude: 45.3 }
        })))
    };
    global.navigator.geolocation = mockGeolocation;
    render(<HomePage />);
    await fireEvent.click(screen.getByText('Get current location'));
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  });

  it('gets data for given city', async () => {
    const getCoordinationsMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([{ name: 'Sofia', country: 'BG', lat: 42.6978634, lon: 23.3221789 }])
    })
    await render(<HomePage />);
    expect(getCoordinationsMock).toHaveBeenCalled();
  });
})