import { useQuery } from '@tanstack/react-query';

import { useUnit } from './useUnit.tsx';
import { fetchCurrentWeather } from '../services/api.tsx';

const useCurrentWeather = () => {
  const { unit } = useUnit();

  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather', unit],
    queryFn: fetchCurrentWeather.bind(null, unit ? 'metric' : 'imperial'),
  });

  return { weather, isLoading, error };
};

export { useCurrentWeather };
