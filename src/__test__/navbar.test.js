import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/navbar';

test('renders correctly', () => {
  const nav = renderer.create(<Router><NavBar /></Router>).toJSON();
  expect(nav).toMatchSnapshot();
});
