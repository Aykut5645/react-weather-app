import WeatherCard from '../WeatherCard/WeatherCard.tsx';
import { useForecast } from '../../hooks/useForecast.tsx';
import { getDailyMiddayWeather } from '../../utils/helpers.tsx';

import styles from './WeatherList.module.scss';

const WeatherList = () => {
  const { forecast, isLoading, error } = useForecast();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  const modifiedForecast = getDailyMiddayWeather(forecast!);

  return (
    <div className={styles.container}>
      {modifiedForecast?.map((w, i) => (
        <WeatherCard
          key={i}
          dt={w?.dt}
          icon={w?.icon}
          temp={w?.temp}
          date={w?.date}
        />
      ))}
    </div>
  );
};

export default WeatherList;
