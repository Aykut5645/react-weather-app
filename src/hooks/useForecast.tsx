import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '../services/api.tsx';

const useForecast = () => {
  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: fetchForecast,
  });

  return { forecast, isLoading, error };
};

export { useForecast };
