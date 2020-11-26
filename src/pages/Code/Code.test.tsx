import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Code from './index';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '',
  }),
}));

describe('<Code />', () => {
  test('it should mount', () => {
    render(
      <Router>
        <Code />
      </Router>
    );

    const code = screen.getByTestId('Code');

    expect(code).toBeInTheDocument();
  });
});
