import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ScaleContextProvider from '../../src/store/ScaleContextProvider.tsx';
import { useCoordinates } from '../../src/hooks/useCoordinates.tsx';
import WeatherDetails from '../../src/components/WeatherDetails/WeatherDetails.tsx';
import { BrowserRouter } from 'react-router-dom';

// Mock the useCoordinates hook
vi.mock('../../src/hooks/useCoordinates.tsx');

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
          <WeatherDetails weekDay="monday" />
        </ScaleContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe('WeatherDetails', () => {
  beforeEach(() => {
    vi.mocked(useCoordinates).mockReturnValue({
      coords: { lat: 0, lon: 0 },
      isFetchingCoords: false,
      errorCoords: null,
    });
  });

  it('should render the details for selected weather', async () => {
    renderComponent();

    const currentWeatherDetails = await screen.findByTestId('current-weather');
    const goBackLink = await screen.getByRole('link');

    expect(currentWeatherDetails).toBeInTheDocument();
    expect(goBackLink).toHaveTextContent(/go back/i);
  });

  it('should render loading state initially', async () => {
    renderComponent();

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render error state when errorCoordinates is returned', () => {
    vi.mocked(useCoordinates).mockReturnValue({
      coords: null,
      isFetchingCoords: false,
      errorCoords: {
        code: 1,
        message: 'User denied Geolocation',
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      },
    });

    renderComponent();

    expect(screen.getByText(/denied/i)).toBeInTheDocument();
  });

  it('should render loading state when both coordinates and errorCoordinates are null', () => {
    vi.mocked(useCoordinates).mockReturnValue({
      coords: null,
      errorCoords: null,
      isFetchingCoords: true,
    });

    renderComponent();

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
