import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseStateHook from './UseStateHook';

describe('<UseStateHook />', () => {
  test('it should mount', () => {
    render(<UseStateHook />);
    expect(true).toBe(true);
  });
});