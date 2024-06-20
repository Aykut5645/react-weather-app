import { useQuery } from '@tanstack/react-query';

import WeatherCard from '../WeatherCard/WeatherCard.tsx';
import Loader from '../../ui/Loader/Loader.tsx';
import useCoordinates from '../../hooks/useCoordinates.tsx';
import { getDailyMiddayWeather } from '../../utils/helpers.tsx';
import { fetchForecast } from '../../services/api.tsx';

import styles from './WeatherList.module.scss';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';

const WeatherList = () => {
  const { coordinates, errorCoordinates } = useCoordinates();
  const {
    data: forecast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['forecast'],
    queryFn: () => fetchForecast(coordinates!),
    enabled: Boolean(coordinates),
  });

  if (Boolean(errorCoordinates === null && coordinates === null) || isLoading)
    return <Loader />;
  if (errorCoordinates || error)
    return (
      <ErrorAlert errorMessage={errorCoordinates?.message || error?.message} />
    );

  const modifiedForecast = getDailyMiddayWeather(forecast!);

  return (
    <ul className={styles.container}>
      {modifiedForecast?.map((w, i) => (
        <WeatherCard
          key={i}
          dt={w?.dt}
          icon={w?.icon}
          temp={w?.temp}
          date={w?.date}
        />
      ))}
    </ul>
  );
};

export default WeatherList;
