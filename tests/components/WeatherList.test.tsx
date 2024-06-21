import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WeatherList from '../../src/components/WeatherList/WeatherList.tsx';

const renderComponent = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  render(
    <QueryClientProvider client={client}>
      <WeatherList />
    </QueryClientProvider>
  );
};

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

describe('WeatherList', () => {
  it('should render loading state initially', () => {
    renderComponent();

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  // it('should render the list of weather forecasts', async () => {
  //   renderComponent();
  //
  //   screen.debug();
  //
  //   const items = await screen.findAllByRole('listitem');
  //   expect(items.length).toBeGreaterThan(0);
  // });
  //
  // it('should render error state if fetching fails', async () => {
  //   // Simulate error state
  //   vi.spyOn(global, 'fetch').mockImplementationOnce(() =>
  //     Promise.reject('API is down')
  //   );
  //
  //   renderComponent();
  //
  //   const errorMessage = await screen.findByRole('alert');
  //   expect(errorMessage).toHaveTextContent('Error fetching data');
  // });
});
