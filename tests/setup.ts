import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';

// Set up MSW server
import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Mock the global navigator.geolocation
beforeEach(() => {
  vi.stubGlobal('navigator', {
    geolocation: {
      getCurrentPosition: vi.fn().mockImplementationOnce((success) => {
        success({
          coords: {
            latitude: 0,
            longitude: 0,
          },
        });
      }),
    },
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
