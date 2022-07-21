import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('renders Calculator component', () => {
    render(<Calculator />);

    expect(screen.getByText(/maths!!/)).toBeInTheDocument();
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.getByText(/7/)).toBeInTheDocument();
    expect(screen.getByText(/9/)).toBeInTheDocument();
  });
});
