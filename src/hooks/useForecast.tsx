import { useQuery } from '@tanstack/react-query';

import { fetchForecast } from '../services/api.tsx';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useForecast = (coordinates: CoordinatesType | null) => {
  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: () => fetchForecast(coordinates!),
    enabled: Boolean(coordinates),
  });

  return { forecast, isLoading, error };
};

export { useForecast };
