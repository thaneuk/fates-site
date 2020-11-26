import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from './';
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

describe('<Resume />', () => {
  test('it should mount', () => {
    render(
      <Router>
        <Resume />
      </Router>
    );

    const resume = screen.getByTestId('Resume');

    expect(resume).toBeInTheDocument();
  });
});
