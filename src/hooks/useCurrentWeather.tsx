import { useQuery } from '@tanstack/react-query';
import { fetchCurrentWeather } from '../services/api.tsx';
import useCoordinates from './useCoordinates.tsx';

const useCurrentWeather = () => {
  const coordinates = useCoordinates();

  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: fetchCurrentWeather.bind(null, coordinates!),
  });

  return { weather, isLoading, error };
};

export { useCurrentWeather };
