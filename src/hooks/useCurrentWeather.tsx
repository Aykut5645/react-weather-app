import { useQuery } from '@tanstack/react-query';
import { fetchCurrentWeather } from '../services/api.tsx';
import useCoordinates from './useCoordinates.tsx';

const useCurrentWeather = () => {
  const coordinates = useCoordinates();

  const {
    data: currentWeather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: fetchCurrentWeather.bind(null, coordinates!),
  });

  return { currentWeather, isLoading, error };
};

export { useCurrentWeather };
