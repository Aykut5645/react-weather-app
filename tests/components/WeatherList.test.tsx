import { it, expect, describe, vi, beforeEach } from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
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
      getCurrentPosition: vi.fn().mockResolvedValue({
        position: { coords: { latitude: 51.1, longitude: 45.3 } },
      }),
    },
  });
});

// describe('WeatherList', () => {
//   it('should render the error message if location is denied', async () => {
//     renderComponent();
//
//     const deniedText = await screen.findByText(/denied/i);
//     expect(deniedText).toBeInTheDocument();
//   });
// });

describe('WeatherList', () => {
  it('should render the list of products', async () => {
    renderComponent();

    const items = await screen.findAllByRole('list');
    console.log('Items => ', items);
    expect(items.length).toBeGreaterThan(0);
  });
});
