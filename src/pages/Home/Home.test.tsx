import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

    const home = screen.getByTestId('Home');

    expect(home).toBeInTheDocument();
  });

  test('it should have sig images', async () => {
    render(<Home />);

    const sigImage1 = await screen.findByAltText(/gyzz/i);
    const sigImage2 = await screen.findByAltText(/ricoh/i);
    const sigImage3 = await screen.findByAltText(/screenager/i);
    const sigImage4 = await screen.findByAltText(/genophix/i);

    expect(sigImage1).toBeInTheDocument();
    expect(sigImage2).toBeInTheDocument();
    expect(sigImage3).toBeInTheDocument();
    expect(sigImage4).toBeInTheDocument();
  });
});
