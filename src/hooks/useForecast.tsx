import { useQuery } from '@tanstack/react-query';

import { useUnit } from './useUnit.tsx';
import { fetchForecast } from '../services/api.tsx';

const useForecast = () => {
  const { unit } = useUnit();

  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast', unit],
    queryFn: fetchForecast.bind(null, unit ? 'metric' : 'imperial'),
  });

  return { forecast, isLoading, error };
};

export { useForecast };
