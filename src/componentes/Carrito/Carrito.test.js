import { render, screen } from '@testing-library/react';
import Carrito from './Carrito';

test('renders learn react link', () => {
  render(<Carrito />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
