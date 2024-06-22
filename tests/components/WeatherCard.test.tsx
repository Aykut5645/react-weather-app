import { render, screen } from '@testing-library/react';

import WeatherCard from '../../src/components/WeatherCard/WeatherCard.tsx';
import ScaleContextProvider from '../../src/store/ScaleContextProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

const renderComponent = () => {
  render(
    <BrowserRouter>
      <ScaleContextProvider>
        <WeatherCard dt={1719144000} icon="04d" temp={33.21} date="6/24/2024" />
      </ScaleContextProvider>
    </BrowserRouter>
  );
};

describe('WeatherCard', () => {
  it('should render the current weather card', async () => {
    renderComponent();

    const link = await screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
