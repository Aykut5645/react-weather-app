import { screen } from '@testing-library/react';

import { mockUseCoordinates, renderWithProviders } from '../test-utils.tsx';
import WeatherDetails from '../../src/components/WeatherDetails/WeatherDetails.tsx';
import {expect} from "vitest";

// Mock the useCoordinates hook
vi.mock('../../src/hooks/useCoordinates.tsx');

describe('WeatherDetails', () => {
  beforeEach(() => mockUseCoordinates());

  it('should render the details for selected weather', async () => {
    renderWithProviders(<WeatherDetails weekDay="monday" />);

    const currentWeatherDetails = await screen.findByTestId('current-weather');
    const goBackLink = await screen.getByRole('link');

    expect(currentWeatherDetails).toBeInTheDocument();
    expect(goBackLink).toHaveTextContent(/go back/i);
  });

  it('should render loading state initially', async () => {
    renderWithProviders(<WeatherDetails weekDay="monday" />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render error state when errorCoordinates is returned', async () => {
    mockUseCoordinates({
      coords: null,
      isFetchingCoords: false,
      errorCoords: { message: 'denied' },
    });

    renderWithProviders(<WeatherDetails weekDay="monday" />);

    const error = await screen.findByText(/denied/i);
    expect(error).toBeInTheDocument();
  });

  it('should render loading state when both coordinates and errorCoordinates are null', () => {
    mockUseCoordinates({
      coords: null,
      errorCoords: null,
      isFetchingCoords: true,
    });

    renderWithProviders(<WeatherDetails weekDay="monday" />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
