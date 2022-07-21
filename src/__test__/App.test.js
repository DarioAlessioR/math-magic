import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('must render components', () => {
  render(<App />);
  const link = screen.getByText(/Home/);
  expect(link).toBeInTheDocument();
});

test('must render components', () => {
  render(<App />);
  const link = screen.getByText(/Quote/);
  expect(link).toBeInTheDocument();
});

test('must render components', () => {
  render(<App />);
  const link = screen.getByText(/Calculator/);
  expect(link).toBeInTheDocument();
});
