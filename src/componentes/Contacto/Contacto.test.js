import { render, screen } from '@testing-library/react';
import Contacto from './Contacto';

test('renders learn react link', () => {
  render(<Contacto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
