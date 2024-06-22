import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from './mocks/server';

beforeAll(() => server.listen());

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

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
