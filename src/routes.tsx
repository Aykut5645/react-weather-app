import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import PageNotFound from './pages/PageNotFound.tsx';

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
        errorElement: <PageNotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routesObjects);

export { router, routesObjects };
