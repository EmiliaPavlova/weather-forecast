import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent
} from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(cleanup);

  it('has suggestions modal opened', () => {
    const onSearchMock = jest.fn();
    const onSelectCityMock = jest.fn();
    const results = [{name: 'Sofia', country: 'BG'}];
    render(<Search onSearch={onSearchMock} onSelectCity={onSelectCityMock} results={results} />);
    expect(screen.getByText('Sofia, BG')).toBeInTheDocument();
  });

  it('displays the suggestions modal with No results message', () => {
    const onSearchMock = jest.fn();
    const onSelectCityMock = jest.fn();
    const results = [];
    render(<Search onSearch={onSearchMock} onSelectCity={onSelectCityMock} results={results} />);
    expect(screen.getByTestId('suggestions')).toHaveTextContent('No results found');
  });

  it('displays the selected city in the input field', async () => {
    const onSearchMock = jest.fn();
    const onSelectCityMock = jest.fn();
    const results = [{name: 'Sofia', country: 'BG'}, {name: 'Plovdiv', country: 'BG'}];
    render(<Search onSearch={onSearchMock} onSelectCity={onSelectCityMock} results={results} />);
    await fireEvent.click(screen.getByText('Plovdiv, BG'));
    expect(screen.getByRole('textbox')).toHaveDisplayValue('Plovdiv, BG');
  });

})