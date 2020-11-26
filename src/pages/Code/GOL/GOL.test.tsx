import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GOL from './index';

describe('<GOL />', () => {
  test('it should mount', () => {
    render(<GOL />);

    const gol = screen.getByTestId('GOL');

    expect(gol).toBeInTheDocument();
  });
});
