import { render, screen } from '@testing-library/react';
import Contenido from './Contenido';

test('renders learn react link', () => {
  render(<Contenido />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
