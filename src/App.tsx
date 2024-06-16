import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import Layout from './ui/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: (),
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
