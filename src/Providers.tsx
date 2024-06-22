import { type ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ScaleContextProvider from './store/ScaleContextProvider.tsx';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ScaleContextProvider>{children}</ScaleContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
