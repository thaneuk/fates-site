import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Adobe from './index';

describe('<Adobe />', () => {
  test('it should mount', () => {
    render(<Adobe />);

    const adobe = screen.getByTestId('Adobe');

    expect(adobe).toBeInTheDocument();
  });
});
