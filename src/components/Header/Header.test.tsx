import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';
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

describe('<Header />', () => {
  test('it should mount', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });
});
