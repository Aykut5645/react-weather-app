import { expect } from 'vitest';
import { screen } from '@testing-library/react';

import CurrentWeather from '../../src/components/CurrentWeather/CurrentWeather.tsx';
import { mockUseCoordinates, renderWithProviders } from '../test-utils.tsx';

// Mock the useCoordinates hook
vi.mock('../../src/hooks/useCoordinates.tsx');

describe('CurrentWeather', () => {
  beforeEach(() => mockUseCoordinates());

  it('should render the current day weather', async () => {
    renderWithProviders(<CurrentWeather />);

    const currentWeather = await screen.findByTestId('current-weather');
    expect(currentWeather).toBeInTheDocument();
  });

  it('should render loading state initially', async () => {
    renderWithProviders(<CurrentWeather />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render error state when errorCoordinates is returned', async () => {
    mockUseCoordinates({
      coords: null,
      isFetchingCoords: false,
      errorCoords: { message: 'denied' },
    });

    renderWithProviders(<CurrentWeather />);

    const error = await screen.findByText(/denied/i);
    expect(error).toBeInTheDocument();
  });

  it('should render loading state when both coordinates and errorCoordinates are null', () => {
    mockUseCoordinates({
      coords: null,
      errorCoords: null,
      isFetchingCoords: true,
    });

    renderWithProviders(<CurrentWeather />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
