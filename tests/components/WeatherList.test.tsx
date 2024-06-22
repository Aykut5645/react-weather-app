import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import WeatherList from '../../src/components/WeatherList/WeatherList.tsx';
import ScaleContextProvider from '../../src/store/ScaleContextProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
beforeEach(() => {
  vi.stubGlobal('navigator', {
    geolocation: {
      getCurrentPosition: vi.fn().mockImplementationOnce((success) => {
        setTimeout(() => {
          success({
            coords: { latitude: 51.1, longitude: 45.3 },
          });
        }, 500);
      }),
    },
  });
});
const renderComponent = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ScaleContextProvider>
          <WeatherList />
        </ScaleContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe('WeatherList', () => {
  it('should render the list of weather forecast', async () => {
    renderComponent();

    const items = await screen.findAllByRole('listitem');

    expect(items.length).toBeGreaterThan(0);
  });

  it('should render loading state initially', () => {
    renderComponent();

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
