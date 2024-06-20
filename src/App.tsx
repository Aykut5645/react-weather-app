import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Layout from './ui/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import UnitContextProvider from './store/UnitContextProvider.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <PageNotFound/>
      },
      {
        path: '/:weekDay',
        element: <DetailsPage />,
        errorElement: <PageNotFound/>
      },
    ],
  },
]);

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UnitContextProvider>
        <RouterProvider router={router} />
      </UnitContextProvider>
    </QueryClientProvider>
  );
};

export default App;
