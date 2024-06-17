import { useQuery } from '@tanstack/react-query';
import { fetchCurrentWeather } from '../services/api.tsx';

const useCurrentWeather = () => {
  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: fetchCurrentWeather,
  });

  return { weather, isLoading, error };
};

export { useCurrentWeather };
