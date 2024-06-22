import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';

const routesObjects: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:weekDay',
        element: <DetailsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routesObjects);

export { router, routesObjects };
