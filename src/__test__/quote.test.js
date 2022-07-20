import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../components/quote';

describe('Quote', () => {
  test('renders Quote component', () => {
    render(<Quote />);

    expect(screen.getByText(/Galileo/)).toBeInTheDocument();
  });
});
