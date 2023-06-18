import { render, screen } from '@testing-library/react';
import Productos from './Productos';

test('renders learn react link', () => {
  render(<Productos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
