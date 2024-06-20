import { it, expect, describe, vi, beforeEach } from 'vitest';
import {render, screen} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "@testing-library/jest-dom/vitest";

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

// beforeEach(() => {
//   vi.stubGlobal('navigator', {
//     geolocation: {
//       getCurrentPosition: vi.fn().mockResolvedValue({
//         position: { coords: { latitude: 51.1, longitude: 45.3 } },
//       }),
//     },
//   });
// });

beforeEach(() => {
  vi.stubGlobal('navigator', {
    geolocation: {
      getCurrentPosition: vi.fn().mockImplementationOnce((success) => {
        setTimeout(() => {
          success({
            coords: { latitude: 51.1, longitude: 45.3 },
          });
        }, 1000);
      }),
    },
  });
});

describe('WeatherList', () => {
  // it('should render loading state initially', () => {
  //   renderComponent();
  //
  //   expect(screen.getByRole('link')).toHaveProperty('href');
  // });

  it('should render the list of products', async () => {
    renderComponent();

    // Wait for the list items to appear
    const items = await screen.findAllByRole('listitem');
    expect(items.length).toBeGreaterThan(0);
  });
});
