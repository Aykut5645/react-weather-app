import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { routesObjects } from '../src/routes.tsx';

export const navigateTo = (path: string) => {
  const router = createMemoryRouter(routesObjects, {
    initialEntries: [path],
  });

  render(<RouterProvider router={router} />);
};

describe('Router', () => {
  it('should render the Home Page for /', async () => {
    navigateTo('/');

    expect(screen.getByText(/today/i)).toBeInTheDocument();
  });

  it('should render the Details Page for /:weekDay', async () => {
    const weekDay = 'monday';

    navigateTo(`/${weekDay}`);

    expect(screen.getByText(new RegExp(weekDay, 'i'))).toBeInTheDocument();
  });

  it('should render the PageNotFound for wrong parameter (week day)', async () => {
    const weekDay = 'wrong week day';

    navigateTo(`/${weekDay}`);

    expect(screen.getByText(/could not be found/i)).toBeInTheDocument();
  });
});
