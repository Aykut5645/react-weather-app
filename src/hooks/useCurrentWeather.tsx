import { useQuery } from '@tanstack/react-query';

import { fetchCurrentWeather } from '../services/api.tsx';
import { CoordinatesType } from '../types/ForecastResponseType.tsx';

const useCurrentWeather = (coords: CoordinatesType | null) => {
  const {
    data: currentWeather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: () => fetchCurrentWeather(coords!),
    enabled: Boolean(coords),
  });

  return { currentWeather, isLoading, error };
};

export { useCurrentWeather };
