import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chrome from './index';

describe('<Chrome />', () => {
  test('it should mount', () => {
    render(<Chrome />);

    const chrome = screen.getByTestId('Chrome');

    expect(chrome).toBeInTheDocument();
  });
});
