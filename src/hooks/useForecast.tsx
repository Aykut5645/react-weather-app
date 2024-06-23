import { useQuery } from '@tanstack/react-query';

import { fetchForecast } from '../services/api.tsx';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useForecast = (coords: CoordinatesType | null) => {
  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: () => fetchForecast(coords!),
    enabled: Boolean(coords),
  });

  return { forecast, isLoading, error };
};

export { useForecast };
