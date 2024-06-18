import { it, expect, describe } from 'vitest';

describe('Main', () => {
  it('should work', async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/weather?lat=42.6926003&lon=23.3557927&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );
    const data = await response.json();
    expect(data).toBeDefined();
    console.log('Data => ', data);
  });
});
