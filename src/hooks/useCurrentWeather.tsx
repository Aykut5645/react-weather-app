import { useQuery } from '@tanstack/react-query';

import { fetchCurrentWeather } from '../services/api.tsx';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useCurrentWeather = (coordinates: CoordinatesType | null) => {
  const {
    data: currentWeather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: () => fetchCurrentWeather(coordinates!),
    enabled: Boolean(coordinates),
  });

  return { currentWeather, isLoading, error };
};

export { useCurrentWeather };
