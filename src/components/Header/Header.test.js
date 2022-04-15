import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('displays the title', () => {
    const mockTitle = 'Header title';
    render(<Header title={mockTitle} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });
});