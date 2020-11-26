import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from './index';

describe('<Skills />', () => {
  render(<Skills />);

  const skills = screen.getByTestId('Skills');

  test('it should mount', () => {
    expect(skills).toBeInTheDocument();
  });

  test('should contain an unordered list', () => {
    expect(skills).toContainHTML('<ul>');
  });

  test('should contain skill list items', () => {
    expect(skills).toContainHTML('<li class="skills">');
  });
});
