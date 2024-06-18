import { it, expect, describe } from 'vitest';

describe('Main', () => {
  it('should work', async () => {
    const response = await fetch(
      `https://api.ope4d54ad9490a1&units=metric`
    );
    const data = await response.json();
    expect(data).toBeDefined();
    console.log('Data => ', data);
  });
});
