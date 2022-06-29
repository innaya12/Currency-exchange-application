import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Currency exchange application/i);
  expect(linkElement).toBeInTheDocument();
});
