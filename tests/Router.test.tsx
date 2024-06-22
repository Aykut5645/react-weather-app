import { createMemoryRouter, RouterProvider } from 'react-router';
import { render, screen } from '@testing-library/react';

import { routesObjects } from '../src/routes.tsx';

describe('Router', () => {
  it('should render the Home Page for /', async () => {
    const router = createMemoryRouter(routesObjects, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/current/i)).toBeInTheDocument();
  });

  it('should render the Details Page for /:weekDay', async () => {
    const weekDay = 'monday';

    const router = createMemoryRouter(routesObjects, {
      initialEntries: [`/${weekDay}`],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(new RegExp(weekDay, 'i'))).toBeInTheDocument();
  });
});
