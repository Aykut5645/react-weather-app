import { screen } from '@testing-library/react';

import ForecastList from '../../src/components/ForecastList/ForecastList.tsx';
import { mockUseCoordinates, renderWithProviders } from '../test-utils.tsx';
import { expect } from 'vitest';

// Mock the useCoordinates hook
vi.mock('../../src/hooks/useCoordinates.tsx');

describe('ForecastList', () => {
  beforeEach(() => mockUseCoordinates());

  it('should render the list of weather forecast', async () => {
    renderWithProviders(<ForecastList />);

    const items = await screen.findAllByRole('listitem');

    expect(items.length).toBeGreaterThan(0);
  });

  it('should render loading state initially', () => {
    renderWithProviders(<ForecastList />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render error state when errorCoordinates is returned', async () => {
    mockUseCoordinates({
      coords: null,
      isFetchingCoords: false,
      errorCoords: { message: 'denied' },
    });

    renderWithProviders(<ForecastList />);

    const error = await screen.findByText(/denied/i);
    expect(error).toBeInTheDocument();
  });

  it('should render loading state when both coordinates and errorCoordinates are null', () => {
    mockUseCoordinates({
      coords: null,
      errorCoords: null,
      isFetchingCoords: true,
    });

    renderWithProviders(<ForecastList />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
