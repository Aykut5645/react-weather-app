import WeatherCard from '../WeatherCard/WeatherCard.tsx';
import Loader from '../../ui/Loader/Loader.tsx';
import ErrorAlert from '../../ui/ErrorAlert/ErrorAlert.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';
import useCoordinates from '../../hooks/useCoordinates.tsx';
import { getDailyMiddayWeather } from '../../utils/helpers.tsx';

import styles from './WeatherList.module.scss';

const WeatherList = () => {
  const { coordinates, errorCoordinates } = useCoordinates();
  const { forecast, isLoading, error } = useForecast(coordinates);

  if ((!coordinates && !errorCoordinates) || isLoading) return <Loader />;
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
