import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const welcome = getByText(/Welcome Morehouse, Clark and Spelman Students/i);
  expect(welcome).toBeInTheDocument();
});

/* We can do integrated testing here. */






