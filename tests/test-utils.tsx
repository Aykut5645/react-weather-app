import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ScaleContextProvider from '../src/store/ScaleContextProvider';
import { useCoordinates } from '../src/hooks/useCoordinates';
import { CoordinatesType } from '../src/types/ForecastResponseType.tsx';

type UseCoordinatesType = {
  coords: CoordinatesType | null;
  errorCoords: { message: string } | null;
  isFetchingCoords: boolean;
};

const initialValue = {
  coords: { lat: 0, lon: 0 },
  errorCoords: null,
  isFetchingCoords: false,
};

// Helper function to mock useCoordinates
export const mockUseCoordinates = ({
  coords,
  errorCoords,
  isFetchingCoords,
}: UseCoordinatesType = initialValue) => {
  vi.mocked(useCoordinates).mockReturnValue({
    coords,
    errorCoords,
    isFetchingCoords,
  });
};

// Helper function to render components with providers
export const renderWithProviders = (ui: ReactElement): RenderResult => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ScaleContextProvider>{ui}</ScaleContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
