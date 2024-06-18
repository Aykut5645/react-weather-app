import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '../services/api.tsx';
import useCoordinates from './useCoordinates.tsx';

const useForecast = () => {
  const coordinates = useCoordinates();

  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: fetchForecast.bind(null, coordinates!),
  });

  return { forecast, isLoading, error };
};

export { useForecast };
