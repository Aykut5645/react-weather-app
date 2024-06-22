import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ScaleSwitcher from '../../src/components/ScaleSwitcher/ScaleSwitcher.tsx';
import ScaleContextProvider from '../../src/store/ScaleContextProvider.tsx';
import { useScale } from '../../src/hooks/useScale.tsx';
import { TempScale } from '../../src/utils/enums.tsx';

// Mock the useScale hook
vi.mock('../../src/hooks/useScale.tsx');

const renderComponent = () => {
  render(
    <ScaleContextProvider>
      <ScaleSwitcher />
    </ScaleContextProvider>
  );

  return {
    celsiusInput: screen.getByLabelText(/C/i) as HTMLInputElement,
    fahrenheitInput: screen.getByLabelText(/F/i) as HTMLInputElement,
    user: userEvent.setup(),
  };
};

describe('ScaleSwitcher', () => {
  beforeEach(() => {
    vi.mocked(useScale).mockReturnValue({
      scale: TempScale.CELSIUS,
      changeScale: vi.fn(),
    });
  });

  it('should render the ScaleSwitcher', () => {
    const { celsiusInput, fahrenheitInput } = renderComponent();

    expect(celsiusInput && fahrenheitInput).toBeInTheDocument();
  });

  it('should have one of the inputs selected on mount', () => {
    const { celsiusInput, fahrenheitInput } = renderComponent();

    expect(celsiusInput.checked || fahrenheitInput.checked).toBe(true);
  });

  it('should call changeScale function when a different scale is selected', async () => {
    const { fahrenheitInput, celsiusInput, user } = renderComponent();
    const { changeScale } = useScale();

    await user.click(fahrenheitInput);

    expect(changeScale).toHaveBeenCalledWith(TempScale.FAHRENHEIT);
    expect(fahrenheitInput.checked).toBe(false);
    expect(celsiusInput.checked).toBe(true);
  });
});
