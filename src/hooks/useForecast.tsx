import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '../services/api.tsx';
import useCoordinates from './useCoordinates.tsx';

const useForecast = () => {
  const { coordinates, errorCoordinates } = useCoordinates();
  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: () => fetchForecast(coordinates!),
  });

  if (errorCoordinates) return { error: errorCoordinates };

  return { forecast, isLoading, error };
};

export { useForecast };
