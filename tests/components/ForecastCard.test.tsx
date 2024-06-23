import { render, screen } from '@testing-library/react';

import ForecastCard from '../../src/components/ForecastCard/ForecastCard.tsx';
import ScaleContextProvider from '../../src/store/ScaleContextProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

const renderComponent = () => {
  render(
    <BrowserRouter>
      <ScaleContextProvider>
        <ForecastCard dt={1} icon="icon" temp={1} date="date" />
      </ScaleContextProvider>
    </BrowserRouter>
  );
};

describe('ForecastCard', () => {
  it('should render the forecast card', async () => {
    renderComponent();

    const link = await screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
