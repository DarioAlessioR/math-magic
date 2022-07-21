import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';

describe('Home', () => {
  test('renders Quote component', () => {
    render(<Home />);

    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});
